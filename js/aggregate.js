var margin = { top: 80, right: 80, bottom: 80, left: 80 },
     width = 600 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;
 var x = d3.scale.ordinal()
     .rangeRoundBands([0, width], .1);
 var y0 = d3.scale.linear().domain([300, 1100]).range([height, 0]),
     y1 = d3.scale.linear().domain([20, 80]).range([height, 0]);
 var xAxis = d3.svg.axis()
     .scale(x)
     .orient("bottom");
 // create left yAxis
 var yAxisLeft = d3.svg.axis().scale(y0).ticks(15).orient("left");
 // create right yAxis
 var yAxisRight = d3.svg.axis().scale(y1).ticks(6).orient("right");
 var svg = d3.select("body").append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("class", "graph")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 d3.json("./json/aggregate.json", function(error, data) {
     x.domain(data.map(function(d) { return d.Continent; }));
     y0.domain([0, d3.max(data, function(d) { return d.GDP > 20000 ? d.GDP : 20000; })]);
     y1.domain([0, d3.max(data, function(d) { return d.population > 3200 ? d.population : 3200; })]);        svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + height + ")")
         .call(xAxis);
     svg.append("g")
         .attr("class", "y axis axisLeft")
         .attr("transform", "translate(0,0)")
         .call(yAxisLeft)
         .append("text")
         .attr("y", 6)
         .attr("dy", "-2em")
         .style("text-anchor", "end")
         .style("text-anchor", "end")
         .text("GDP");        svg.append("g")
         .attr("class", "y axis axisRight")
         .attr("transform", "translate(" + (width) + ",0)")
         .call(yAxisRight)
         .append("text")
         .attr("y", 6)
         .attr("dy", "-2em")
         .attr("dx", "2em")
         .style("text-anchor", "end")
         .text("Population");
     bars = svg.selectAll(".bar").data(data).enter();
     bars.append("rect")
         .attr("class", "bar1")
         .attr("x", function(d) { return x(d.Continent); })
         .attr("width", x.rangeBand() / 2)
         .attr("y", function(d) { return y0(d.GDP); })
         .attr("height", function(d, i, j) { return height - y0(d.GDP); });
     bars.append("rect")
         .attr("class", "bar2")
         .attr("x", function(d) { return x(d.Continent) + x.rangeBand() / 2; })
         .attr("width", x.rangeBand() / 2)
         .attr("y", function(d) { return y1(d.population); })
         .attr("height", function(d, i, j) { return height - y1(d.population); });
 });    function type(d) {
     d.GDP = +d.GDP;
     return d;
 }