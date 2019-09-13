const packager = require('electron-packager');
const path = require('path');
const webpack = require('webpack');
const config_production = require('./webpack/webpack.config.production.js');
const config_dev = require('./webpack/webpack.config.dev.render.js');
const argv = process.argv;
const isProduction = argv.includes('production');



console.log(`Compiling ${isProduction ? 'production' : 'development'} code...`)

const config = isProduction ? config_production : config_dev;
let _stats;
console.log(config)
webpack(config, function () {
    if (isProduction) {
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
                console.log('Done...')
            })
    }
}).watch(config.watchOptions, function (err, stats) {
    _stats = stats
    console.log(stats || '');
    //console.error(err || '');
});

(function wait() {
    if (true) setTimeout(wait, 1000);
})();