const {app, BrowserWindow} = require('electron');
let windows = [];

function createWindow() {
    // each browser window creates a new renderer process
    let win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
    windows.push(win);
}

app.on('ready', () => {
    createWindow();
    createWindow();
});