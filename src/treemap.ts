import { ccd3 as d3 } from 'ccts';

const SIZE: [number, number] = [500, 500];


export default function (containerID: string, data: {}) {
    console.log(containerID);
    let svg = d3.select(`#${containerID}`)
        .append('div')
        .style('position', `relative`)
        .style('width', `100vw`)
        .style('height', `100vh`);

    let treemap = d3.treemap()
        .size(SIZE)
        .tile(d3.treemapResquarify)
        .round(true);

    let root = d3.hierarchy(data);

    root.sum(function (d: any) {
        return d.value;
    });

    treemap(root);

    let nodes = svg.append('section')
        .style('width', `100%`)
        .style('height', `100%`)
        .selectAll('div')
        .data(root.descendants())
        .enter()
        .append('div')
        .classed('warper', true)
        .style('transform', function (d: any) { return `translate(${NTP(d.x0)}vw, ${NTP(d.y0)}vh)` })
        .style('width', function (d: any) { return NTP(d.x1 - d.x0) + '%'; })
        .style('height', function (d: any) { return NTP(d.y1 - d.y0) + '%'; })
        .append('div')
        .attr('id', function (d: { data: any }) {
            return d.data.path;
        })
        .style('background-color', 'rgba(255, 165, 2, .3)')
        .style('width', '100%')
        .style('height', '100%')
        .style('overflow', 'hidden')
        .append('header')
        .classed('title', true)
        .style('padding', '8px')
        .text(function (d: { data: any }) {
            return d.data.name;
        });

    // nodes.append('text')
    //     .attr('dx', 4)
    //     .attr('dy', 14)
    //     .text(function (d: { data: any }) {
    //         return d.data.name;
    //     })
}


function NTP(px: number) {
    //return px;
    return px * 100 / SIZE[0];
}