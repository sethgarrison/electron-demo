const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    // initialize one parent window
    const parent = new BrowserWindow();

    // create a new modal window using parent & modal props
    const child = new BrowserWindow({
        parent: parent,
        modal: true,
        show: false
    });

    parent.loadURL(`file://${__dirname}/index.html`);

    // use load url to show web page
    child.loadURL('https://github.com');

    // when child is ready, show
    child.once('ready-to-show', () => {
        child.show();
    });
});