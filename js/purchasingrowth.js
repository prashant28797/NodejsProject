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
    "purchasingpower2010": "644.35",
    "purchasingpower2013": "776.28"
  },
  {
    "CountryName": "Australia",
    "Population2010": "22.18",
    "Population2013": "23.05",
    "purchasingpower2010": "880.09",
    "purchasingpower2013": "1015.94"
  },
  {
    "CountryName": "Brazil",
    "Population2010": "194.95",
    "Population2013": "199.88",
    "purchasingpower2010": "2186.54",
    "purchasingpower2013": "2466.57"
  },
  {
    "CountryName": "Canada",
    "Population2010": "34.08",
    "Population2013": "35.21",
    "purchasingpower2010": "1370.64",
    "purchasingpower2013": "1534.94"
  },
  {
    "CountryName": "China",
    "Population2010": "1340.91",
    "Population2013": "1360.76",
    "purchasingpower2010": "10128.40",
    "purchasingpower2013": "13623.26"
  },
  {
    "CountryName": "France",
    "Population2010": "62.77",
    "Population2013": "63.70",
    "purchasingpower2010": "2131.48",
    "purchasingpower2013": "2289.92"
  },
  {
    "CountryName": "Germany",
    "Population2010": "81.76",
    "Population2013": "81.75",
    "purchasingpower2010": "2957.38",
    "purchasingpower2013": "3269.56"
  },
  {
    "CountryName": "India",
    "Population2010": "1190.52",
    "Population2013": "1239.26",
    "purchasingpower2010": "4021.77",
    "purchasingpower2013": "5031.68"
  },
  {
    "CountryName": "Indonesia",
    "Population2010": "237.64",
    "Population2013": "247.95",
    "purchasingpower2010": "1034.65",
    "purchasingpower2013": "1314.66"
  },
  {
    "CountryName": "Italy",
    "Population2010": "60.34",
    "Population2013": "61.00",
    "purchasingpower2010": "1799.17",
    "purchasingpower2013": "1835.66"
  },
  {
    "CountryName": "Japan",
    "Population2010": "128.05",
    "Population2013": "127.34",
    "purchasingpower2010": "4389.48",
    "purchasingpower2013": "4778.52"
  },
  {
    "CountryName": "Mexico",
    "Population2010": "112.32",
    "Population2013": "116.02",
    "purchasingpower2010": "1566.31",
    "purchasingpower2013": "1848.42"
  },
  {
    "CountryName": "Russia",
    "Population2010": "142.90",
    "Population2013": "141.44",
    "purchasingpower2010": "2241.70",
    "purchasingpower2013": "2640.74"
  },
  {
    "CountryName": "Saudi Arabia",
    "Population2010": "27.56",
    "Population2013": "26.93",
    "purchasingpower2010": "619.83",
    "purchasingpower2013": "735.82"
  },
  {
    "CountryName": "South Africa",
    "Population2010": "49.99",
    "Population2013": "51.81",
    "purchasingpower2010": "528.04",
    "purchasingpower2013": "608.80"
  },
  {
    "CountryName": "Republic of Korea",
    "Population2010": "49.41",
    "Population2013": "50.24",
    "purchasingpower2010": "1468.33",
    "purchasingpower2013": "1687.14"
  },
  {
    "CountryName": "Turkey",
    "Population2010": "73.00",
    "Population2013": "75.81",
    "purchasingpower2010": "970.50",
    "purchasingpower2013": "1181.01"
  },
  {
    "CountryName": "United Kingdom",
    "Population2010": "62.26",
    "Population2013": "63.76",
    "purchasingpower2010": "2223.25",
    "purchasingpower2013": "2391.04"
  },
  {
    "CountryName": "USA",
    "Population2010": "309.73",
    "Population2013": "316.85",
    "purchasingpower2010": "14498.93",
    "purchasingpower2013": "16237.75"
  }
]
var key = ["purchasingpower2010","purchasingpower2013"];
initStackedBarChart.draw({
  data: data,
  key: key,
  element: 'stacked-bar'
});