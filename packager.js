const packager = require('electron-packager');
const path = require('path');
const webpack = require('webpack');
const { spawn, spawnSync } = require('child_process');

const config_production = require('./webpack/webpack.config.production.js');
const config_dev = require('./webpack/webpack.config.dev');

const argv = process.argv;
const isProduction = argv.includes('production');

const config_packager = {
    dir: path.join(__dirname, ''),
    icon: path.join(__dirname, '/build/icon.ico'),
    overwrite: true,
    arch: 'x64',
    platform: 'win32',
    prune: true,
    out: path.join(__dirname, '/ssa'),
    asar: true,
};



console.log(`Mode: ${isProduction ? 'production' : 'development'}`)

const config = isProduction ? config_production : config_dev;
if (!isProduction) {
    let cmd_sass = spawn('cmd');
    cmd_sass.stdout.on('data', d => console.log(d.toString()));
    cmd_sass.stdin.write('sass --watch src/main.scss build/main.css\n');
    webpack(config)
        .watch(config.watchOptions, function (err, stats) {
            console.log(stats.toString({
                chunks: false,
                colors: true
            }));
            console.log('Process completed. Watching files...');
        });
} else {
    webpack(config)
        .run(function (err, stats) {
            console.log(stats.toString({
                chunks: false,
                colors: true
            }));
            console.log('Compiling CSS file...')
            let result = spawnSync('cmd', ['/c sass --no-source-map src/main.scss build/main.css']);
            console.log('CSS file compiled.')
            packager(config_packager)
                .then(function () {
                    console.log('Process completed.')
                })

        })
}



