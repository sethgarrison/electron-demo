const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
    // initialize window to not show
    const window = new BrowserWindow({
        show: false
    });

    // load url to window
    window.loadURL(path.join('file://', __dirname, 'index.html'));

    // when window is ready and all files are loaded, show window
    window.on('ready-to-show', () => {
        window.show();
    });
});