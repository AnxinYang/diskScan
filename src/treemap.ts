import { ccd3 as d3 } from 'ccts';
import store from './store';
import * as path from 'path';
import { file } from './types';
import { spawnSync } from 'child_process';

const SIZE: [number, number] = [500, 500];

let CURRENT_DATA: file;
let CONTAINER: string;
let isRendering = false;
let holdRender: number | NodeJS.Timeout;

window.addEventListener('resize', function () {
    CONTAINER && Treemap();
});


let treemap = d3.treemap()
    .tile(d3.treemapBinary)
    .round(true)
    .paddingInner(4)
    .paddingOuter(4);


let Treemap = function (containerSelector?: string, key?: string) {
    let scanUpdate = !containerSelector && !key;
    if (isRendering && scanUpdate) {
        if (holdRender) {
            clearTimeout(<number>holdRender);
        }
        holdRender = setTimeout(Treemap, 50)
        return;
    }
    isRendering = true;
    let originalData = store.get(key || CURRENT_DATA.path);
    CURRENT_DATA = Object.assign({}, store.get(key || CURRENT_DATA.path));
    containerSelector = CONTAINER = containerSelector || CONTAINER;

    let svg = d3.select(containerSelector)
        .style('position', `relative`);

    let { width, height } = document.querySelector(containerSelector).getBoundingClientRect();

    treemap.size([width, height]);

    CURRENT_DATA._value = CURRENT_DATA.value;
    CURRENT_DATA.value = 0;
    CURRENT_DATA.children = store.get(originalData);


    let root = d3.hierarchy(CURRENT_DATA);

    root.sum(function (d: any) {
        return d.value;
    });

    treemap(root);

    let treeData: { data: any }[] = root.descendants();
    let errorNum = store.get('errorNum');
    let folderNum = store.get('folderNum');
    let fileNum = store.get('fileNum');

    d3.select('#back')
        .text((CURRENT_DATA.parent ? 'Back | ' : '')
            + path.normalize(treeData[0].data.path)
            + ' (' + numberToBytes(treeData[0].data._value) + ') '
            + (store.get('scanning') ? (Math.random() > 0.5 ? '[\\]' : '[/]') + ' Scanning... ' : 'Completed. ')
            + d3.format(',')(folderNum) + ' folders and '
            + d3.format(',')(fileNum) + ' files were scanned. '
            + (errorNum > 0 ? d3.format(',')(errorNum) + ' items were skipped (Not scan permission)' : ''))

        .on('click', function () {
            if (treeData[0].data.parent)
                Treemap(containerSelector, treeData[0].data.parent.path);
        });

    svg.selectAll('.warper')
        .data(treeData)
        .exit()
        .remove();

    svg.selectAll('.warper')
        .data(treeData)
        .enter()
        // Warper
        .append('div')
        .classed('warper', true)
        .style('transform', function (d: any) { return `translate(${(d.x0)}px, ${(d.y0)}px)` })
        .style('width', 0)
        .style('height', 0)
        // Content container
        .append('div')
        .classed('content-container', true)
        // Path
        .append('header')
        .classed('title', true)
        .parent()
        // Children contents
        .append('div')
        .classed('children-container', true);

    let warpers = svg.selectAll('.warper')
        .attr('title', 'Right click to open in file explorer')
        .classed('file', function (d: { data: any }) {
            return !d.data.isDirectory;
        })
        .classed('child', function (d: { data: any }, i) {
            return d.data.isDirectory && i > 0;
        })
        .style('background-color', function (d: { data: any }, i) {
            return d.data.isDirectory && i === 0 ? 'rgba(45, 52, 54, 0.5)' : '';
        })
        .attr('id', function (d: { data: any }) {
            return `f_` + stringToAscii(d.data.path);
        })
        .on('click', function (d: { data: any }, i) {
            if (!d.data.isDirectory) {
                return;
            }
            Treemap(containerSelector, d.data.path);
        })
        .on('mousedown', function (d: { data: any }) {
            if (d3.event.which === 3) {
                spawnSync(`explorer.exe`, [`/select,${d.data.path}`])
            };
        })


    warpers.select('header')
        .text(function (d: { data: any }, i) {
            let text = i === 0 ? '' : d.data.name + ' (' + numberToBytes(d.data.value) + ')';
            return text;
        })

    if (scanUpdate || treeData.length > 100) {
        warpers
            .style('transform', function (d: any) { return `translate(${(d.x0)}px, ${(d.y0)}px)` })
            .style('width', function (d: any) { return (d.x1 - d.x0) + 'px'; })
            .style('height', function (d: any) { return (d.y1 - d.y0) + 'px'; })
        setTimeout(function () {
            isRendering = false;
        }, 20)
    } else {
        warpers
            .transition()
            .delay((d: any, i: number) => i * 10)
            .duration(50)
            .style('transform', function (d: any) { return `translate(${(d.x0)}px, ${(d.y0)}px)` })
            .style('width', function (d: any) { return (d.x1 - d.x0) + 'px'; })
            .style('height', function (d: any) { return (d.y1 - d.y0) + 'px'; })
            .end()
            .then(function () {
                setTimeout(function () {
                    isRendering = false;
                }, 20)
            });
    }
}

function stringToAscii(string: string) {
    return string.split('')
        .map(function (char) {
            return char.charCodeAt(0);
        })
        .reduce(function (current, previous): any {
            return previous + '' + current;
        });
}

function numberToBytes(number: number) {
    if (number === 0) return '0 Bytes';

    const k = 1024;
    const dm = 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(number) / Math.log(k));

    return parseFloat((number / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default Treemap;

