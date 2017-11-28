const {app, Menu} = require('electron');

module.exports = {
    setMainMenu
};

// this is part of the main process, not the renderer.
function setMainMenu() {
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
        }
    ];

    // we construct our menu using `buildFromTemplate`
    const menu = Menu.buildFromTemplate(template);
    // set the menu for the application
    Menu.setApplicationMenu(menu);
}