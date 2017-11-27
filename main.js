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

    // use load url to show web page
    child.loadURL('https://github.com');

    // parent will show beneath
    parent.show();

    // when child is ready, show
    child.once('ready-to-show', () => {
        child.show()
    })
});