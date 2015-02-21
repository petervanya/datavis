var width = 900;
var height = 600;

var graphics = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

var arc = d3.svg.arc()
    .innerRadius(90)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI);


var x_centre=300;
var y_centre=300;
var y_eye_offset=30;
var x_eye_offset=40;
var r_eye=20;

graphics.append("circle")
    .attr("r",100)
    .attr("cx",x_centre)
    .attr("cy",y_centre)
    .style("fill","yellow")
    .style("opacity","0.7");

graphics.append("circle")
    .attr("r",r_eye)
    .attr("cx",x_centre-x_eye_offset)
    .attr("cy",y_centre-y_eye_offset)
    .style("fill","black");

graphics.append("circle")
    .attr("r",r_eye)
    .attr("cx",x_centre+x_eye_offset)
    .attr("cy",y_centre-y_eye_offset)
    .style("fill","black");


graphics.append("path")
    .attr("d",arc.innerRadius(70).outerRadius(80).startAngle(2*Math.PI/3).endAngle(4*Math.PI/3) )
    .attr("transform", "translate("+x_centre+","+y_centre+")");


graphics.append("path")
    .attr("d",arc.innerRadius(20).outerRadius(30).startAngle(-Math.PI/3).endAngle(Math.PI/3) )
    .attr("transform", "translate("+(x_centre+x_eye_offset)+","+(y_centre-y_eye_offset-10)+")");

graphics.append("path")
    .attr("d",arc.innerRadius(20).outerRadius(30).startAngle(-Math.PI/3).endAngle(Math.PI/3) )
    .attr("transform", "translate("+(x_centre-x_eye_offset)+","+(y_centre-y_eye_offset-10)+")");
