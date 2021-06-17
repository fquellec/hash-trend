import { useD3 } from '../../hooks/useD3.jsx';
import React from 'react';
import * as d3 from 'd3';

const geojson = require("../../assets/countries.json");
const data = require("../../fakeDB/ghg_world.csv");

function WordlMap({ data1 }) {
  const ref = useD3(
    (svg) => {
        const height = svg.node().getBoundingClientRect().height ;
        const width = svg.node().getBoundingClientRect().width ;
        const padding = 0;
        //const colorScaleDomain = [0, 10000];
        //const colorScaleRange = ["#ececec", "#D6121E"];
        const borderColor = ["white", "grey"];

        const map  = svg
            .append('g')
            .attr("width", width)
            .attr("height", height)
            .attr('preserveAspectRatio', "xMinYMin meet")
            .attr('viewBox', "0 0 " + width + " " + height)
            .attr('pointer-events', 'all');

        // Map values to country id
	    //var valuesById = {};
        //data.forEach(function (d) {
        //    valuesById[d.id] = {"name": d.name, "values": +d.values};
        //});

        // Map projection to compute coordinates 
        const projection = d3.geoIdentity().reflectY(true).fitSize([width - padding*2, height - padding*2], geojson);
        const path = d3.geoPath().projection(projection);

        //const minValue = d3.min(values, function(d) { return +d.values; });
        //const maxValue = d3.max(values, function(d) { return +d.values; });

        //const color = d3.scaleLinear()
        //    .domain(colorScaleDomain)
        //    .range(colorScaleRange);

        // Draw the map
        map
            .attr("transform", "translate(" + padding + "," + padding + ")")
            .selectAll(".country")
            .data(geojson.features)
            .enter()
                .append("path")
                .attr('class', 'country')
                .attr("fill", function (d) {
                    /*
                    if (valuesById[d.properties.ISO_A3] && valuesById[d.properties.ISO_A3]['values'] !== 0) {
                    return color(valuesById[d.properties.ISO_A3]['values'])
                    } else {
                    return "#F2F2F2"
                    }  
                    */
                    return "#F2F2F2"    
                })
                .style("opacity", 0.9)
                .attr("d", path)
                .style("stroke", borderColor[0])
                .style("stroke-width", "0.5px")
                .style("stroke-opacity", "1");

    },
    [data.length]
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

export default WordlMap;