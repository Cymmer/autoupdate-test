echo "================================================================================"
echo "                      CodeChum Workspace Bootstrap Script                       "
echo "================================================================================"
echo ""
echo "Checking if script is in root directory of codechum-desktop"
echo ""

if [ -f ./src/App.tsx ]; then
    echo "Check Success"
else 
    echo "Check Failed. Please place this file in the root directory of codechum-app "
    exit
fi

# installs the three extensions required for code formatting
echo ""
echo "Installing Required VS Code Extensions"
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension rvest.vs-code-prettier-eslint
code --install-extension dzannotti.vscode-babel-coloring
code --install-extension EditorConfig.EditorConfig

# installs optional but recommended extensions that
# can be used during development
echo ""
while true; do
    read -p "Do you wish to install Recommended Extensions? [y/n] " yn
    case $yn in
        [Yy]* ) code --install-extension CoenraadS.bracket-pair-colorizer-2; code --install-extension VisualStudioExptTeam.vscodeintellicode; code --install-extension eamodio.gitlens; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

# install npm modules
echo "Installing npm modules"
npm install

echo "✨ CodeChum Desktop setup completed ✨"