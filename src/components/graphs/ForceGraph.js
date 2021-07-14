import { useD3 } from '../../hooks/useD3.jsx';
import React from 'react';
import * as d3 from 'd3';
import forceBoundary from 'd3-force-boundary';

//const graph = require("../../fakeDB/graph.json");

function ForceGraph( props ) {
  const graph = props.data
  const ref = useD3(
    (svg) => {
        const borderColor = ["white", "#34495e"];

        const height = svg.node().getBoundingClientRect().height ;
        const width = svg.node().getBoundingClientRect().width ;

        svg.attr('preserveAspectRatio', "xMinYMin meet")
            .attr('viewBox', "0 0 " + width + " " + height)
   
        // Viz margin
        //const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    
        // Node size scale
        const minValue = d3.min(graph.nodes, function(d) { return +d.nb_tweets; });
        const maxValue = d3.max(graph.nodes, function(d) { return +d.nb_tweets; });
        const size = d3.scaleSqrt()
            .domain([minValue,maxValue])
            .range([2, 40]);

        // Node color scale
        //const color = d3.scaleOrdinal()
        //.domain(colorScaleDomain)
        //.range(colorScaleRange);

        var simulation = d3.forceSimulation()
            .force("boundary", forceBoundary(30,30,width-30, height-30))
            .force("link", d3.forceLink().id(function(d) { return d.id; }))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force('charge', d3.forceManyBody().strength(-50))
            .force('collide',d3.forceCollide().radius(function(d) { return  6 + size(d.nb_tweets); }).iterations(2));

        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", function(d) { return 0.2*d.weight; })
            .attr("stroke", "grey")

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(graph.nodes)
            .enter().append("g");
        
            //var circles = 
        node.append("circle")
            .attr("r", function(d) { return  size(d.nb_tweets); })
            .attr("fill", function(d) { return "#2D5C7F"; })
            .attr("stroke", function(d) {return borderColor[0]; })
            .attr("stroke-opacity", 1)
            .attr("stroke-width", function(d) {return 0.1*size(size(d.nb_tweets));})
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))

    
        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function ticked() {

            node
                .attr("transform", function(d) {
                    //const radius = 3 + Math.sqrt(d.nb_tweets)*2;
                    return "translate(" + d.x + "," + d.y + ")";
                })

            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
        }

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    },
    [graph.length]
  );

  return (
 
        <svg
            ref={ref}
            style={{
                width: "100%",
                height: "50vh",
                marginRight: "0px",
                marginLeft: "0px",
            }}
            >
        </svg>
  );
}

export default ForceGraph;