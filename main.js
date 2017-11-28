const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {
    const window = new BrowserWindow({
        show: false
    });

    window.loadURL(`file://${__dirname}/index.html`);

    window.on('ready-to-show', () => {
        window.show();
    });

    // ipcMain can listen to ipcRenderer messages using `on`
    ipcMain.on('render-message', (event) => {
        // the event includes a sender, which can be used to send messages to
        // the renderer process
        event.sender.send('main-message', 'message received!');
    });
});