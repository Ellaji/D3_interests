

const interestBubbles = () => {

    var sets = [
                {sets:["Audio"], figure: 8.91, label: "Audio", size: 8.91},
                {sets:["Direct Buy"], figure: 34.53, label: "Direct Buy", size: 34.53},
                {sets:["Branded Takeover"], figure: 40.9, label: "Branded Takeover", size: 40.9},
                {sets: ["Audio", "Direct Buy"], figure: 5.05, label: "Audio and Direct Buy", size: 5.05},
                {sets: ["Audio", "Branded Takeover"], figure: 3.65, label: "Audio and Branded Takeover", size: 3.65},
                {sets: ["Direct Buy", "Branded Takeover"], figure: 4.08, label: "Direct Buy and Branded Takeover", size: 4.08},
                {sets: ["Audio", "Direct Buy", "Branded Takeover"], figure: 2.8, label: "Audio, Direct Buy, and Branded Takeover", size: 2.8}
                ];


    var chart = venn.VennDiagram()
        .width(500)
        .height(400)

    

    var div = d3.select("#venn_one").datum(sets).call(chart);
        div.selectAll("text").style("fill", "white");
        div.selectAll(".venn-circle path")
                .style("fill-opacity", .8)
                .style("stroke-width", 1)
                .style("stroke-opacity", 1)
                .style("stroke", "fff");



    var tooltip = d3.select("#venn_one").append("div")
        .attr("class", "venntooltip");


    div.selectAll("g")
        .on("mouseover", function(d, i) {
            // sort all the areas relative to the current item
            venn.sortAreas(div, d);

            // Display a tooltip with the current size
            tooltip.transition().duration(40).style("opacity", 1);
            tooltip.text(d.size + "% of Audience One saw " + d.label);

            // highlight the current path
            // highlight the current path
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("stroke-width", 3)
                .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                .style("stroke-opacity", 1);
        })

        .on("mousemove", function() {
            tooltip.style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })

        .on("mouseout", function(d, i) {
            tooltip.transition().duration(2000).style("opacity", 0);
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("stroke-width", 3)
                .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                .style("stroke-opacity", 1);
        });






    var sets = [
                {sets:["Audio"], figure: 27.92, label: "Audio", size: 27.92},
                {sets:["Direct Buy"], figure: 55.28, label: "Direct Buy", size: 55.28},
                {sets:["Branded Takeover"], figure: 7.62, label: "Branded Takeover", size: 7.62},
                {sets: ["Audio", "Direct Buy"], figure: 3.03, label: "Audio and Direct Buy", size: 3.03},
                {sets: ["Audio", "Branded Takeover"], figure: 1.66, label: "Audio and Branded Takeover", size: 1.66},
                {sets: ["Direct Buy", "Branded Takeover"], figure: 2.40, label: "Direct Buy and Branded Takeover", size: 2.40},
                {sets: ["Audio", "Direct Buy", "Branded Takeover"], figure: 1.08, label: "Audio, Direct Buy, and Branded Takeover", size: 1.08} 
                ];



    var chart = venn.VennDiagram()
        .width(500)
        .height(400)

    

    var div2 = d3.select("#venn_two").datum(sets).call(chart);
        div2.selectAll("text").style("fill", "white");
        div2.selectAll(".venn-circle path")
                .style("fill-opacity", .8)
                .style("stroke-width", 1)
                .style("stroke-opacity", 1)
                .style("stroke", "fff");



    var tooltip = d3.select("body").append("div")
        .attr("class", "venntooltip");




    div2.selectAll("g")
        .on("mouseover", function(d, i) {
            // sort all the areas relative to the current item
            venn.sortAreas(div2, d);

            // Display a tooltip with the current size
            tooltip.transition().duration(40).style("opacity", 1);
            tooltip.text(d.size + "% of Audience Two saw " + d.label);

            // highlight the current path
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("stroke-width", 3)
                .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                .style("stroke-opacity", 1);
        })

        .on("mousemove", function() {
            tooltip.style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })

        .on("mouseout", function(d, i) {
            tooltip.transition().duration(2500).style("opacity", 0);
            var selection = d3.select(this).transition("tooltip").duration(400);
            selection.select("path")
                .style("stroke-width", 3)
                .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                .style("stroke-opacity", 1);
        });

}

interestBubbles();

//https://github.com/benfred/venn.js/issues/22