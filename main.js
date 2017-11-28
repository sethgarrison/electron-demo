const {app, BrowserWindow} = require('electron');
// get setMainMenu method from 'main-menu'
const {setMainMenu} = require('./main-menu');

app.on('ready', () => {
    const window = new BrowserWindow({
        show: false
    });

    window.loadURL(`file://${__dirname}/index.html`);

    window.on('ready-to-show', () => {
        window.show();
        window.webContents.openDevTools();
    });

    // set main menu needs to be called in ready handler - or it won't work
    setMainMenu(window);
});