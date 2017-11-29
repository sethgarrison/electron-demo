const {app, BrowserWindow, ipcMain, shell} = require('electron');
const os = require('os');
const fs = require('fs');
const path = require('path');

app.on('ready', () => {
    const window = new BrowserWindow();

    window.loadURL(`file://${__dirname}/index.html`);

    ipcMain.on('print-to-pdf', (event) => {
        const pdfPath = path.join(os.tmpdir(), 'prind.pdf');
        const win = BrowserWindow.fromWebContents(event.sender);
        win.webContents.printToPDF({}, (err, data) => {
            if (err) throw err;
            fs.writeFile(pdfPath, data, (err) => {
                if (err) throw err;
                shell.openExternal(`file://${pdfPath}`);
                event.sender.send('wrote-pdf', pdfPath);
            });
        });
    });
});