const {app, BrowserWindow, ipcMain, Menu, MenuItem} = require('electron');

const menu = new Menu();
menu.append(new MenuItem({ label: 'Hello' }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true }));

app.on('ready', () => {
    const window = new BrowserWindow({
        show: false
    });

    window.loadURL(`file://${__dirname}/index.html`);

    window.on('ready-to-show', () => {
        window.show();
        window.openDevTools();
    });

    ipcMain.on('show-menu', (event) => {
        const win = BrowserWindow.fromWebContents(event.sender);
        menu.popup(win);
    });

    window.webContents.on('context-menu', (event, params) => {
        menu.popup(window, params.x, params.y)
    });
});
