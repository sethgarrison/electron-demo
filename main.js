const {app, BrowserWindow, ipcMain, globalShortcut} = require('electron');
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

    // ipcMain can listen to ipcRenderer messages using `on`
    ipcMain.on('render-message', (event) => {
        // the event includes a sender, which can be used to send messages to
        // the renderer process
        event.sender.send('main-message', 'message received!');
    });

    // you can register global shortcuts in the main process
    globalShortcut.register('CmdOrCtrl+5', () => {
        // the window object has a `webContents` object which you can
        // use to send events
        window.webContents.send('main-message', 'you pressed the magic keys')
    });
});

// when the app quits, unregister all shortcuts!
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});