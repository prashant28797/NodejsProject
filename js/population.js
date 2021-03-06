var initStackedBarChart = {
	draw: function(config) {
		me = this,
		domEle = config.element,
		stackKey = config.key,
		data = config.data,
		margin = {top: 5, right: 40, bottom: 80, left: 120},
		parseDate = d3.timeParse("%m/%Y"),
		width = 1400 - margin.left - margin.right,
		height = 700 - margin.top - margin.bottom,
		xScale = d3.scaleBand().range([0, width]).padding(0.1),
		yScale = d3.scaleLinear().range([height, 0]),
		color = d3.scaleOrdinal(d3.schemeCategory20),
		xAxis = d3.axisBottom(xScale),
		yAxis =  d3.axisLeft(yScale),
		svg = d3.select("#"+domEle).append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var stack = d3.stack()
			.keys(stackKey)
			.order(d3.stackOrderNone)
			.offset(d3.stackOffsetNone);
	
		var layers= stack(data);
			data.sort(function(a, b) { return b.total - a.total; });
			xScale.domain(data.map(function(d) { return (d.CountryName); }));
			yScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();

		var layer = svg.selectAll(".layer")
			.data(layers)
			.enter().append("g")
			.attr("class", "layer")
			.style("fill", function(d, i) { return color(i); });

		  layer.selectAll("rect")
			  .data(function(d) { return d; })
			.enter().append("rect")
			  .attr("x", function(d) { return xScale((d.data.CountryName)); })
			  .attr("y", function(d) { return yScale(d[1]); })
			  .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
			  .attr("width", xScale.bandwidth());

			svg.append("g")
			.attr("class", "axis axis--x")
			.attr("transform", "translate(0," + (height+5) + ")")
			.call(xAxis);

			svg.append("g")
			.attr("class", "axis axis--y")
			.attr("transform", "translate(0,0)")
			.call(yAxis);							
	}
}
var data = [
  {
    "CountryName": "Argentina",
    "Population2010": "40.12",
    "Population2013": "41.49",
    "purchasingpower2010": "716.45"
  },
  {
    "CountryName": "Australia",
    "Population2010": "22.18",
    "Population2013": "23.05",
    "purchasingpower2010": "920.75"
  },
  {
    "CountryName": "Brazil",
    "Population2010": "194.95",
    "Population2013": "199.88",
    "purchasingpower2010": "2294.18"
  },
  {
    "CountryName": "Canada",
    "Population2010": "34.08",
    "Population2013": "35.21",
    "purchasingpower2010": "1435.78"
  },
  {
    "CountryName": "China",
    "Population2010": "1340.91",
    "Population2013": "1360.76",
    "purchasingpower2010": "11305.77"
  },
  {
    "CountryName": "France",
    "Population2010": "62.77",
    "Population2013": "63.70",
    "purchasingpower2010": "2213.78"
  },
  {
    "CountryName": "Germany",
    "Population2010": "81.76",
    "Population2013": "81.75",
    "purchasingpower2010": "3113.93"
  },
  {
    "CountryName": "India",
    "Population2010": "1190.52",
    "Population2013": "1239.26",
    "purchasingpower2010": "4425.64"
  },
  {
    "CountryName": "Indonesia",
    "Population2010": "237.64",
    "Population2013": "247.95",
    "purchasingpower2010": "1125.29"
  },
  {
    "CountryName": "Italy",
    "Population2010": "60.34",
    "Population2013": "61.00",
    "purchasingpower2010": "1844.39"
  },
  {
    "CountryName": "Japan",
    "Population2010": "128.05",
    "Population2013": "127.34",
    "purchasingpower2010": "4457.56"
  },
  {
    "CountryName": "Mexico",
    "Population2010": "112.32",
    "Population2013": "116.02",
    "purchasingpower2010": "1662.36"
  },
  {
    "CountryName": "Russia",
    "Population2010": "142.90",
    "Population2013": "141.44",
    "purchasingpower2010": "2387.93"
  },
  {
    "CountryName": "Saudi Arabia",
    "Population2010": "27.56",
    "Population2013": "26.93",
    "purchasingpower2010": "656.23"
  },
  {
    "CountryName": "South Africa",
    "Population2010": "49.99",
    "Population2013": "51.81",
    "purchasingpower2010": "557.94"
  },
  {
    "CountryName": "Republic of Korea",
    "Population2010": "49.41",
    "Population2013": "50.24",
    "purchasingpower2010": "1554.12"
  },
  {
    "CountryName": "Turkey",
    "Population2010": "73.00",
    "Population2013": "75.81",
    "purchasingpower2010": "1075.47"
  },
  {
    "CountryName": "United Kingdom",
    "Population2010": "62.26",
    "Population2013": "63.76",
    "purchasingpower2010": "2291.43"
  },
  {
    "CountryName": "USA",
    "Population2010": "309.73",
    "Population2013": "316.85",
    "purchasingpower2010": "15075.68"
  },
  {
    "CountryName": "European Union",
    "Population2010": "501.65",
    "Population2013": "504.89",
    "purchasingpower2010": "15770.15"
  },
  {
    "CountryName": "World",
    "Population2010": "6863.77",
    "Population2013": "7095.22",
    "purchasingpower2010": "79345.68"
  }
]
var key = ["Population2010","Population2013"];
initStackedBarChart.draw({
	data: data,
	key: key,
	element: 'stacked-bar'
});