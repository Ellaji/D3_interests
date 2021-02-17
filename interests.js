const interestBubbles = () => {

    var sets = [
                {sets:["Frontend"], figure: 60, label: "Frontend", size: 60},
                {sets:["Datavisualization"], figure: 10, label: "Datavisualization", size: 10},
                {sets:["Design"], figure: 5, label: "Design", size: 5},

                {sets: ["Frontend", "Datavisualization"], figure: 0, label: "Frontend and Datavisualization", size: 0},
                {sets: ["Frontend", "Design"], figure: 1, label: "Frontend and Design", size: 1},
                {sets: ["Datavisualization", "Design"], figure: 2, label: "Datavisualization and Design", size: 2},
                {sets: ["Frontend", "Datavisualization", "Design"], figure: 0, label: "Frontend, Datavisualization, and Design", size: 0}
                ];


    var chart = venn.VennDiagram()
        .width(500)
        .height(400)

    var div = d3.select("#venn_one").datum(sets).call(chart);
        div.selectAll("text").style("fill", "white");
        div.selectAll(".venn-circle path")
                .style("fill-opacity", .6)
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
                .style("fill-opacity", d.sets.length == 1 ? .6 : 0)
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
                .style("fill-opacity", d.sets.length == 1 ? .6 : 0)
                .style("stroke-opacity", 1);
        });






    var sets = [
                {sets:["Frontend"], figure: 20, label: "Frontend", size: 20},
                {sets:["Datavisualization"], figure: 50, label: "Datavisualization", size: 50},
                {sets:["Design"], figure: 5, label: "Design", size: 5},
                {sets: ["Frontend", "Datavisualization"], figure: 15, label: "Frontend and Datavisualization", size: 15},
                {sets: ["Frontend", "Design"], figure: 1.66, label: "Frontend and Design", size: 1.66},
                {sets: ["Datavisualization", "Design"], figure: 2.40, label: "Datavisualization and Design", size: 2.40},
                {sets: ["Frontend", "Datavisualization", "Design"], figure: 1.08, label: "Frontend, Datavisualization, and Design", size: 1.08} 
                ];



    var chart = venn.VennDiagram()
        .width(500)
        .height(400)

    

    var div2 = d3.select("#venn_two").datum(sets).call(chart);
        div2.selectAll("text").style("fill", "white");
        div2.selectAll(".venn-circle path")
                .style("fill-opacity", .6)
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
                .style("fill-opacity", d.sets.length == 1 ? .6 : 0)
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
                .style("fill-opacity", d.sets.length == 1 ? .6 : 0)
                .style("stroke-opacity", 1);
        });

    changeFontSizeBasedOnBubbleSize();

}

const changeFontSizeBasedOnBubbleSize = () => {
    var circles = document.getElementsByClassName("venn-circle");

    console.log(circles);
    console.log(circles[3].getBoundingClientRect().width);
    
    for (var i = 0; i < circles; i++) { 
        console.log("test");
    }
}

interestBubbles();


//https://github.com/benfred/venn.js/issues/22