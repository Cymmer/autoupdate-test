/* eslint global-require: off, no-console: off, promise/always-return: off */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { BrowserWindow, app, shell } from 'electron';
import axios, { AxiosError } from 'axios';

import { AppImageUpdater } from 'electron-updater';
// eslint-disable-next-line import/order
import MenuBuilder from './menu';
// eslint-disable-next-line import/order
import { version as currentAppVersion } from '../../release/app/package.json';
// eslint-disable-next-line import/order
import log from 'electron-log';
// eslint-disable-next-line import/order
import path from 'path';
import { resolveHtmlPath } from './util';

let mainWindow: BrowserWindow | null = null;
const controller = new AbortController();
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

/**
 * AutoUpdate Settings
 */
const autoUpdater = new AppImageUpdater();
autoUpdater.autoDownload = false; // We allow users to choose whether to download or not
autoUpdater.autoInstallOnAppQuit = false; // set to `true` if there is a crucial update

/**
 * Environment Settings
 */
if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

/**
 * Utility Functions
 */
const sendStatusToWindow = (text: string) => {
  log.info(text);
  mainWindow?.webContents.send('message', text);
};

/**
 * Main Processes
 */
const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });
  mainWindow?.loadURL(resolveHtmlPath('index.html'));
  mainWindow?.webContents.on('did-finish-load', () => {
    mainWindow?.show();
  });

  const updateWindow = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWindow,
    show: false,
  });
  updateWindow.loadURL('https://google.com');

  mainWindow?.on('ready-to-show', async () => {
    let hasInternet = true;

    // Check Internet
    try {
      await axios.get('https://google.com');
    } catch (error: unknown) {
      // const err = error as AxiosError;
      // For debugging
      axios.post(
        'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
        {
          content: `internet: hi`,
        }
      );
      hasInternet = false;
    }

    if (!hasInternet) {
      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      mainWindow?.webContents.on('did-finish-load', () => {
        mainWindow?.show();
      });
      return;
    }

    if (isDevelopment) return;
    // Check for updates
    let updates;
    try {
      updates = await autoUpdater.checkForUpdates();
      console.log(`UPDATES: ${JSON.stringify(updates)}`);
      // eslint-disable-next-line no-empty
    } catch (e) {
      console.log(`UPDATES error: ${JSON.stringify(e)}`);
    }

    // For debugging
    axios.post(
      'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
      {
        content: `updates: ${updates?.updateInfo.version} ${updates?.updateInfo.releaseName}`,
      }
    );

    axios.post(
      'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
      {
        content: `Current App Version: ${currentAppVersion}`,
      }
    );

    if (updates?.updateInfo.version !== currentAppVersion) {
      axios.post(
        'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
        { content: `AutoUpdater: Update available.` }
      );
      updateWindow?.webContents.on('did-finish-load', () => {
        updateWindow?.show();
      });
      await autoUpdater.downloadUpdate();
      setImmediate(() => {
        autoUpdater.quitAndInstall();
      });
    }

    // There should be a prompt asking if the user wants to update if ever the update is optional
    if (autoUpdater.autoDownload) {
      autoUpdater.downloadUpdate();
    }

    autoUpdater.on('update-available', (info: unknown) => {
      sendStatusToWindow('Update available.');
      // For debugging
      axios.post(
        'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
        { content: `Manual update ongoing` }
      );
    });

    // AutoUpdater Listeners
    autoUpdater.on('error', (err: string) => {
      axios.post(
        'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
        { content: `AutoUpdater: Error in auto-updater:${err}` }
      );
      sendStatusToWindow(`Error in auto-updater.:${err}`);
    });
    autoUpdater.on('update-not-available', (info: unknown) => {
      axios.post(
        'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
        { content: `Update not available: ${info}` }
      );
      sendStatusToWindow('Update not available.');
      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        mainWindow.minimize();
      } else {
        mainWindow.show();
      }
    });
    autoUpdater.on(
      'download-progress',
      (progressObj: {
        bytesPerSecond: string;
        percent: string;
        transferred: string;
        total: string;
      }) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let log_message = `Download speed: ${progressObj.bytesPerSecond}`;
        axios.post(
          'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
          { content: `${log_message} - Downloaded ${progressObj.percent}%` }
        );
        log_message = `${log_message} - Downloaded ${progressObj.percent}%`;
        log_message = `${log_message} (${progressObj.transferred}/${progressObj.total})`;
        sendStatusToWindow(log_message);
      }
    );
    autoUpdater.on('update-downloaded', (info) => {
      axios.post(
        'https://discord.com/api/webhooks/933196539201998988/J3ISuEbkKqXUaE8aP9IX8WhkPAQB48bwgkgN_Hy-CXH1jlEkTOypwpjm8sfALpOD1i8I',
        { content: `AutoUpdater: Update downloaded:${info}` }
      );
      sendStatusToWindow('Update downloaded');
      autoUpdater.quitAndInstall(undefined, true);

      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        mainWindow.minimize();
      } else {
        mainWindow.show();
      }
    });
  });

  mainWindow?.on('closed', () => {
    controller.abort();
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  controller.abort();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === undefined || mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
