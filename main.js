const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    // initialize one parent window
    const parent = new BrowserWindow();
    // create a new child window using "parent" prop
    const child = new BrowserWindow({parent: parent, width: 100, height: 100});

    // parent will show beneath
    parent.show();
    // child will show on top
    child.show();
});