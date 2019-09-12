const packager = require('electron-packager');
const path = require('path');

packager({
    dir: path.join(__dirname, ''),
    icon: path.join(__dirname, '/build/icon.ico'),
    overwrite: true,
    arch: 'x64',
    platform: 'win32',
})
    .then(function () {
        console.log('DONE...')
    })