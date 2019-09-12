const packager = require('electron-packager');

packager({
    dir: './',
    icon: './build/icon.ico',
    overwrite: true,
})