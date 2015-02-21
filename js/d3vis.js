// Let's draw something

var body = d3.select("body");

var graphics = body.append("svg");
var width = 900;
var height = 600;
graphics.attr("width",width);
graphics.attr("height",height);

graphics.append("circle")
    .attr("r",15)
    .attr("cx",20)
    .attr("cy",20);

graphics.append("rect")
    .attr("x",40)
    .attr("y",20)
    .attr("height",30)
    .attr("width",50);

graphics.append("line")
    .attr("x1",100)
    .attr("y1",50)
    .attr("x2",180)
    .attr("y2",10)
    .attr("stroke","#ff0000")
    .attr("stroke-width",2);

graphics.append("text")
    .text("I am drawing!")
    .style("font-family","sans-serif")
    .attr("x",180)
    .attr("y",50);

/********************************/
/*** Histogram                ***/
var xpos=100;
var ypos=300;
var bar_width=20;
var bar_height=200;

for(var i=1; i<=10;i++) {
graphics.append("rect")
    .attr("x",xpos+(i-1)*bar_width)
    .attr("y",ypos-bar_height/i)
    .attr("height",bar_height/i)
    .attr("width",bar_width-1);
}

graphics.append("line")
    .attr("x1",xpos-3)
    .attr("y1",ypos+5)
    .attr("x2",xpos-3)
    .attr("y2",ypos-bar_height-5)
    .attr("stroke","#ff0000")
    .attr("stroke-width",3);

graphics.append("line")
    .attr("x1",xpos-3)
    .attr("y1",ypos+3)
    .attr("x2",xpos+bar_width*10+5)
    .attr("y2",ypos+3)
    .attr("stroke","#ff0000")
    .attr("stroke-width",3);

graphics.append("text")
    .text("X axis")
    .style("font-family","sans-serif")
    .attr("x",xpos+bar_width*10+10)
    .attr("y",ypos+5);

graphics.append("text")
    .text("Y axis")
    .style("font-family","sans-serif")
    .attr("x",xpos-3)
    .attr("y",ypos-bar_height-10);

// Exercise 9
graphics.append("circle")
    .attr("r", 40)
    .attr("cx", 400)
    .attr("cy", 400)
    .style("fill", "#4682B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "10px")
    .style("opacity", "0.5");


graphics.append("text")
    .text("I am drawing!")
    .style("font-family","Georgia")
    .attr("x",500)
    .attr("y",500)
    .attr("text-anchor","start")
    .attr("transform","rotate(45,500,500)");