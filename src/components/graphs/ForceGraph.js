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

        const tooltip = d3.select('body')
            .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("font-family", "inherit")
                .style("font-size", "0.7rem")
                .style("background-color", "white")
                .style("border", "solid white")
                .style("border-width", "2px")
                .style("border-radius", "5px")
                .style("padding", "5px")
                .style("position", "absolute")
                .style("width", "200px")
                .style("pointer-events", "none")
                .style("webkit-box-shadow", "0px 0px 10px grey")
                .style("moz-box-shadow",  "0px 0px 10px grey")
                .style("box-shadow", "0px 0px 10px grey");

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
            .attr("stroke-width", function(d) {return 0.1*size(d.nb_tweets);})
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))
            .on("mouseover", function(event, d){
                var textToDisplay = "<b>" + d.name + "</b><br>" 
                            + "Nombre de tweets: <b>" + d.nb_tweets + "</b>.<br>"
                            + "Nombre de Followers: <b>" + d.followers + "</b>.<br>"
                            + "Nombre d'intéractions': <b>" + d.interaction + "</b>.<br>"
                            ;
        
                // Compute bounded coordinates
                //const tooltipWidth = tooltip.node().getBoundingClientRect().width 
                //const tooltipHeight =  tooltip.node().getBoundingClientRect().height 
                //const mapWidth = svg.node().getBoundingClientRect().width 
                //const mapHeight = svg.node().getBoundingClientRect().height 
                var left = event.pageX
                var top = event.pageY
                //var left = Math.max(0, Math.min(mapWidth - tooltipWidth, event.pageX - d3.select('.tooltip').node().offsetWidth - 5));
                //var top = Math.max(0, Math.min(mapHeight - tooltipHeight, event.pageY - d3.select('.tooltip').node().offsetHeight));
                // console.log(tooltipWidth, tooltipHeight, mapWidth, mapHeight)
                //console.log(left ,  top)

                tooltip
                    .html(textToDisplay)
                    .style("left", left + "px")
                    .style("top", top + "px");
        
        
                tooltip.style("opacity", 1);
                d3.select(this.parentNode.appendChild(this)).style("stroke", "#2D5C7F");
                d3.select(this.parentNode.appendChild(this)).style("fill", 'white');//brighter(1)d3.rgb(color(d.nonouiaucun)).darker(1)
        
                })
                .on("mouseleave", function(d){
                tooltip.style("opacity", 0);
                d3.select(this.parentNode.appendChild(this)).style("fill", "#2D5C7F");
                d3.select(this.parentNode.appendChild(this)).style("stroke", borderColor[0]);
                    
                });

    
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