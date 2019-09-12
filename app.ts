import index from './src/index_render';
import { Stats, promises as fp } from 'fs';
import store from './src/store';
import cc, { ccd3 as d3 } from 'ccts';
//import { spawn } from 'child_process';
import { normalize } from 'path';
import { remote } from 'electron';

const { getCurrentWindow, globalShortcut } = remote;

// let list = spawn('cmd');
// let driveList: string[] = [];
// let buffer = ''
// list.stdout.on('data', function (data) {
//     buffer += data.toString();
// });

// list.stderr.on('data', function (data) {
//     console.log('stderr: ' + data);
// });

// list.on('exit', function (code) {
//     let arr = buffer.toString().split('\n');
//     arr.forEach(function (item: string) {
//         let trimmed = item.trim() + `\\`;
//         if (trimmed.match(/^[a-zA-Z]:\\?$/gm)) {
//             driveList.push(trimmed);
//         }
//     })
//     console.log(driveList);
//     console.log('child process exited with code ' + code);

//     cc.select(`#disks`)
//         .selectAll('div')
//         .data(driveList)
//         .enter()
//         .append('div')
//         .classed('disk', true)
//         .text(d => d)
//         .on('click', function (d) {
//             startScan(d);
//         });
// });

// list.stdin.write('wmic logicaldisk get name\n');
// list.stdin.end();


let menu = cc.select('#menu');

cc.select('#path-input')
    .on('keyup', function (e) {
        let { key, target } = d3.event;
        cc.select('#path-error')
            .style('opacity', 0)
            .text('');
        if (key === 'Enter') {
            startScan(target.value + '\\')
        }
    });

function startScan(path: string) {
    path = normalize(path);
    fp.stat(path)
        .then(function (stats) {
            if (stats.isDirectory()) {
                menu.transition()
                    .duration(500)
                    .style('max-height', '0px')
                    .style('padding', '0')
                    .style('margin', '0')
                    .end()
                    .then(function () {
                        console.log(path);
                        index(path)
                    });
            } else {
                cc.select('#path-error')
                    .style('opacity', 0)
                    .text('Error: Target is not a valid directory.');
            }

        })
        .catch(err => {
            cc.select('#path-error')
                .style('opacity', 1)
                .text('Error: Target is not a valid directory.');
            console.error(err)
        })
}



globalShortcut.register('F5', getCurrentWindow().reload);
globalShortcut.register('CommandOrControl+Shift+I', getCurrentWindow().webContents.toggleDevTools);
window.addEventListener('beforeunload', () => {
    globalShortcut.unregister('F5');
    globalShortcut.unregister('CommandOrControl+Shift+I');
})
