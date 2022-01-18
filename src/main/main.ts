/* eslint global-require: off, no-console: off, promise/always-return: off */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { BrowserWindow, app, ipcMain, shell } from 'electron';
import { exec, spawn } from 'child_process';

import { AppImageUpdater } from 'electron-updater';
import MenuBuilder from './menu';
/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import axios from 'axios';
import log from 'electron-log';
import path from 'path';
import { resolveHtmlPath } from './util';
import { update } from 'lodash';

let mainWindow: BrowserWindow | null = null;
const controller = new AbortController();
const { signal } = controller;

const autoUpdater = new AppImageUpdater();
autoUpdater.autoDownload = false; // We allow users to choose whether to download or not
// assuming the update is optional
autoUpdater.autoInstallOnAppQuit = false; // set to `true` if there is a crucial update
autoUpdater.checkForUpdatesAndNotify();

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

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');
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

  function sendStatusToWindow(text: string) {
    log.info(text);
    mainWindow!.webContents.send('message', text);
  }

  autoUpdater.on('checking-for-update', () => {
    axios.post(
      'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
      { content: `AutoUpdater: Checking for update.` }
    );
    sendStatusToWindow('Checking for update...');
  });

  let updateAvailable = false;
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('https://github.com');
  autoUpdater.on('update-available', (info: any) => {
    axios.post(
      'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
      { content: `AutoUpdater: Update available.` + info }
    );
    sendStatusToWindow('Update available.');
    updateAvailable = true;
  });

  autoUpdater.on('update-not-available', (info: any) => {
    axios.post(
      'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
      { content: `Update not available: ` + info }
    );
    sendStatusToWindow('Update not available.');
  });
  autoUpdater.on('error', (err: string) => {
    axios.post(
      'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
      { content: `AutoUpdater: Error in auto-updater: ` + err }
    );
    sendStatusToWindow('Error in auto-updater. ' + err);
  });
  autoUpdater.on(
    'download-progress',
    (progressObj: {
      bytesPerSecond: string;
      percent: string;
      transferred: string;
      total: string;
    }) => {
      let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
      axios.post(
        'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
        { content: log_message + ' - Downloaded ' + progressObj.percent + '%' }
      );
      log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
      log_message =
        log_message +
        ' (' +
        progressObj.transferred +
        '/' +
        progressObj.total +
        ')';
      sendStatusToWindow(log_message);
    }
  );
  autoUpdater.on('update-downloaded', (info) => {
    axios.post(
      'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
      { content: `AutoUpdater: Update downloaded ` + info }
    );
    sendStatusToWindow('Update downloaded');
    autoUpdater.quitAndInstall(undefined, true);
  });

  mainWindow!.loadURL(resolveHtmlPath('index.html'));

  mainWindow!.on('ready-to-show', () => {
    if (updateAvailable) {
      win.on('ready-to-show', () => {
        if (!win) {
          throw new Error('subwindow not defined');
        }
        win.show();
      });
      axios.post(
        'https://discord.com/api/webhooks/906911530820436010/Qh-u35ioUerJ925NnBkWTZ6l4RY1-M7sei7_EXxt_6l-nkRXmuxVNpHEC-P3hyzZji2m',
        { content: `Manual update ongoing`}
      );
      autoUpdater.downloadUpdate();
    } else {

    }
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow!.on('closed', () => {
    controller.abort();
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow!);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow!.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
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
