const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
    const window = new BrowserWindow();
    window.loadURL(path.join('file://', __dirname, 'index.html'));
});