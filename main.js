const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    const window = new BrowserWindow();
    window.loadURL(`file://${__dirname}/index.html`);
});