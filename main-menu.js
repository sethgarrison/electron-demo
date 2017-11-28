const {app, Menu} = require('electron');

// import our dialog methods from a separate file
const {
    showMessageBox,
    showOpenDialog,
    showSaveDialog,
    showErrorBox
} = require('./dialogs');

// export our setMainMenu method
module.exports = {
    setMainMenu
};

// this is part of the main process, not the renderer.
function setMainMenu(browserWindow) {
    const template = [
        {
            // note: app name will not appear in development - only
            // when app is built
            label: app.getName(),
            submenu: [
                {
                    label: `Quit ${app.getName()}`,
                    // accelerators are hot keys used to invoke action
                    accelerator: 'CmdOrCtrl+Q',
                    // what happens when menu item is clicked
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                // roles are predefined standard menu types
                {role: 'copy'},
                {role: 'cut'},
                {role: 'paste'},
                // type: separator just creates a line in the menu
                {type: 'separator'},
                {role: 'undo'},
                {role: 'redo'}
            ]
        },
        {
            label: 'File',
            submenu: [
                {
                    label: 'Show Message',
                    accelerator: 'CmdOrCtrl+M',
                    click() {
                        showMessageBox(browserWindow);
                    }
                },
                {
                    label: 'Open File',
                    accelerator: 'CmdOrCtrl+O',
                    click() {
                        showOpenDialog(browserWindow)
                    }
                },
                {
                    label: 'Save File',
                    accelerator: 'CmdOrCtrl+S',
                    click() {
                        showSaveDialog(browserWindow)
                    }
                },
                {
                    label: 'Show Error',
                    accelerator: 'CmdOrCtrl+E',
                    click() {
                        showErrorBox()
                    }
                }
            ]
        }
    ];

    // we construct our menu using `buildFromTemplate`
    const menu = Menu.buildFromTemplate(template);
    // set the menu for the application
    Menu.setApplicationMenu(menu);
}