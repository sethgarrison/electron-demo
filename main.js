const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    const window = new BrowserWindow({
        shw: false
    });

    window.loadURL(`file://${__dirname}/index.html`);

    window.on('ready-to-show', () => {
        window.show();
    });
});