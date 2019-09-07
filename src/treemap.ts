import { ccd3 as d3 } from 'ccts';

export default function (containerID: string, data: {}) {
    console.log(containerID);
    let svg = d3.select(`#${containerID}`)
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    let treemap = d3.treemap()
        .size([500, 500])
        .tile(d3.treemapResquarify)
        .round(true)
        .paddingInner(5)
        .paddingOuter(16);

    let root = d3.hierarchy(data);

    root.sum(function (d: any) {
        return d.value;
    });

    treemap(root);

    let nodes = svg.append('g')
        .selectAll('g')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('transform', function (d: any) { return 'translate(' + [d.x0, d.y0] + ')' });

    nodes.append('rect')
        .attr('fill', 'rgba(255, 165, 2, .3)')
        .attr('width', function (d: any) { return d.x1 - d.x0; })
        .attr('height', function (d: any) { return d.y1 - d.y0; });

    nodes.append('text')
        .attr('dx', 4)
        .attr('dy', 14)
        .text(function (d: { data: any }) {
            return d.data.name;
        })
}
