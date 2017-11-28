const {app, BrowserWindow, ipcMain, Menu, MenuItem} = require('electron');
// get setMainMenu method from 'main-menu'
const {setMainMenu} = require('./main-menu');

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
        window.webContents.openDevTools();
    });

    // set main menu needs to be called in ready handler - or it won't work
    setMainMenu(window);

    // ipcMain can listen to ipcRenderer messages using `on`
    ipcMain.on('show-menu', (event) => {
        const win = BrowserWindow.fromWebContents(event.sender);
        menu.popup(win);
    });

    window.webContents.on('context-menu', (event, params) => {
        menu.popup(window, params.x, params.y)
    });
});
