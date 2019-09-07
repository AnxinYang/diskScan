import * as d3 from 'd3';
export default function (containerID, data) {
    console.log(containerID);
    let svg = d3.select(`#${containerID}`)
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);
    let treemap = d3.treemap()
        .size([500, 500])
        .tile(d3.treemapResquarify)
        .round(true)
        .paddingInner(1);
    let root = d3.hierarchy(data);
    root.sum(function (d) {
        return d.value;
    });
    treemap(root);
    svg
        .selectAll('rect')
        .data(root.descendants())
        .enter()
        .append('rect')
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; });
}
//# sourceMappingURL=treemap.js.map