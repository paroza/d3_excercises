var data = [4,8,15,16,23,42]; 


//to eliminate the secret number of 10, you can use linear scale
// var x = d3.scale.linear()
// 	.domain([0, d3.max(data)])
// 	.range([0,420]); 




// //first you select the chart container 
// //var chart = d3.select(".chart");
// d3.select(".chart")
//    //next you initiatite the data join by defining the selection 
//    //to which we will join data. 
//    // /var bar = chart.selectAll("div");
//   .selectAll("div")
//   //var barUpdate = bar.data(data);
//   .data(data)
//   //var barEnter = barUpdate.enter().append("div");
//  .enter().append("div")
//  //Now we set the width of each new bar as a multiple of the associated data value, d.
//   //d is data?
//   .style("width", function(d) {return x(d)+ "px"; })
//   // .style("background-color", function(d) {return x(d)}))
//     //to produce a label 
//   .text(function(d) {return d; }); 




//DOING IT WITH SVG FILES 
//http://bost.ocks.org/mike/bar/2/
var width = 420, 
	barHeight = 20; 

//this is the number you are going to multpily
var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0,width]); 

//selecting the svg chart
var chart = d3.select('.chart')
	.attr("width", width)
	.attr("height", barHeight * data.length); 

//this is like calling div, it is the grouped things
var bar = chart.selectAll('g')
	.data(data)
	//this is the data join 
 .enter().append('g')
 	.attr("transform", function(d,i) { return "translate(0," + i * barHeight+ ")"; });

bar.append("rect")
	.attr("width", x)
	.attr("height", barHeight-1); 

bar.append("text")
	//you have to add 3 so that the text fits in nicely
	.attr("x", function(d) {return x(d)-3; })
	.attr("y", barHeight/2)
	.attr("dy", ".35em")
	.text(function(d) {return d;}); 
