var width= 420, 
	barHeight = 60; 

var x= d3.scale.linear()
	//this is the display space 
	.range([0,width]); 

var chart = d3.select(".chart")
	.attr("width", width); 

d3.tsv("data.tsv", type, function(error,data) {
	//this is mapping from the data space 
	x.domain([0, d3.max(data, function(d) {return d.value; })]); 

	//the height of the chart depends on the number of bars. 
	chart.attr("height", barHeight * data.length); 

	var bar = chart.selectAll('g')
		.data(data)
	  .enter().append('g')
	  	.attr('transform', function(d,i) {return "translate(0," + i * barHeight + ")"; });

	 bar.append("rect")
	 	.attr("width", function(d) {return x(d.value); })
	 	.attr("height", barHeight-1); 

	 bar.append("text")
	 	.attr("x", function(d) {return x(d.value) - 3; })
	 	.attr("y", barHeight / 2)
	 	.attr("dy", ".35em")
	 	.text(function(d) {return d.value; }); 

}); 

	//this is used when you load the tsv file 
	function type(d) {
	d.value = +d.value; //coerce to number 
	return d; 
}
