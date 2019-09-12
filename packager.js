const packager = require('electron-packager');
const path = require('path');

packager({
    dir: path.join(__dirname, ''),
    icon: path.join(__dirname, '/build/icon.ico'),
    overwrite: true,
    arch: 'x64',
    platform: 'win32',
    prune: true,
    out: path.join(__dirname, '/ssa'),
    asar: true,
})
    .then(function () {
        console.log('DONE...')
    })