import { ccd3 as d3 } from 'ccts';
import store from './store';
import * as path from 'path';
const SIZE: [number, number] = [500, 500];

let CURRENT_DATA: any;
let CONTAINER: string;

window.addEventListener('resize', function () {

    CURRENT_DATA && Treemap(CONTAINER, CURRENT_DATA.path);
});

let Treemap = function (containerSelector: string, key: string) {
    CURRENT_DATA = store.get(key);
    CONTAINER = containerSelector;

    // d3.selectAll(containerSelector + ' .warper')
    //     .style('display', 'none');

    let svg = d3.select(containerSelector)
        .style('position', `relative`)
        .style('width', `100vw`)
        .style('height', `100vh`);

    let { width, height } = document.querySelector(containerSelector).getBoundingClientRect();

    let treemap = d3.treemap()
        .size([width, height])
        //.tile(d3.treemapResquarify)
        .round(true)
        .paddingInner(4)
        .paddingOuter(4);

    let root = d3.hierarchy(CURRENT_DATA);

    root.sum(function (d: any) {
        return d.value;
    });

    treemap(root);

    let treeData: { data: any }[] = root.descendants();

    d3.select('#back')
        .text(treeData[0].data.name + ' (' + treeData[0].data.value + 'Bytes)')
        .on('click', function () {
            if (treeData[0].data.parent)
                Treemap(containerSelector, treeData[0].data.parent);
        });

    svg.selectAll('.warper')
        .data(treeData)
        .exit()
        .remove();

    let warpers = svg.selectAll('.warper')
        .data(treeData)
        .enter()
        // Warper
        .append('div')
        .classed('warper', true)
        // Content container
        .append('div')
        .classed('content-container', true)
        .style('width', '100%')
        .style('height', '100%')
        .style('overflow', 'hidden')
        .style('display', 'flex')
        .style('flex-direction', 'column')
        // Path
        .append('header')
        .classed('title', true)
        .style('padding', '8px')
        .parent()
        // Children contents
        .append('div')
        .classed('children-container', true)
        .style('position', 'relative')
        .style('flex-grow', 1);

    svg.selectAll('.warper')
        .classed('file', function (d: { data: any }) {
            return !d.data.isDirectory;
        })
        .classed('child', function (d: { data: any }, i) {
            return d.data.isDirectory && i > 0;
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
        .transition()
        .duration(500)
        .style('transform', function (d: any) { return `translate(${(d.x0)}px, ${(d.y0)}px)` })
        .style('width', function (d: any) { return (d.x1 - d.x0) + 'px'; })
        .style('height', function (d: any) { return (d.y1 - d.y0) + 'px'; });

    svg.selectAll('.warper')
        .select('header')
        .text(function (d: { data: any }, i) {
            let text = i === 0 ? '' : d.data.name + ' (' + d.data.value + 'Bytes)';
            return text;
        });

    //update();


    // nodes.append('text')
    //     .attr('dx', 4)
    //     .attr('dy', 14)
    //     .text(function (d: { data: any }) {
    //         return d.data.name;
    //     })
}

let update = function () {
    setTimeout(function () {
        Treemap(CONTAINER, CURRENT_DATA.path);
        update();
    }, 1000)
}

function NTP(px: number) {
    //return px;
    return px * 100 / SIZE[0];
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

export default Treemap;

