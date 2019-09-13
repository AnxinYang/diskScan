const packager = require('electron-packager');
const path = require('path');
const webpack = require('webpack');
const config_production = require('./webpack/webpack.config.production.js');
const config_dev = require('./webpack/webpack.config.dev.render');
const argv = process.argv;
const isProduction = argv.includes('production');



console.log(`Compiling ${isProduction ? 'production' : 'development'} code:`)

const config = isProduction ? config_production : config_dev;
console.log(config)
const compiler = webpack(config, function () {
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
})

const watching = compiler.watch(undefined, function (err, stats) {
    console.log(stats || '');
    console.error(err || '');
});

(function wait() {
    if (true) setTimeout(wait, 1000);
})();