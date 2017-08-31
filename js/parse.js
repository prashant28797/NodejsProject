var fs=require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('./da.csv')
});
// json for sorted of population column

var obj=[];

lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');
		 jsonFromLine.CountryName = lineSplit[0];
		 jsonFromLine.population = lineSplit[5];
		 obj.push(jsonFromLine);
});
//console.log(obj1);

lineReader.on('close',function(line){
var s=obj.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.population-a.population));
s.shift();
console.log(s);
fs.createWriteStream('./population.json').write(JSON.stringify(s,null,2));
})

//sorting of  gdp pf country
var gdp=[];

lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');
		 jsonFromLine.CountryName = lineSplit[0];
		 jsonFromLine.GDP = lineSplit[9];
		 gdp.push(jsonFromLine);

});


lineReader.on('close',function(line){
var getdata1=gdp.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.GDP-a.GDP));
getdata1.shift();
fs.createWriteStream('./gdp.json').write(JSON.stringify(getdata1,null,2));
})

//Sorting purchasing power
var purchasing=[];

lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');
		 jsonFromLine.CountryName = lineSplit[0];
		 jsonFromLine.purchasingpower = lineSplit[17];
		 purchasing.push(jsonFromLine);

});

lineReader.on('close',function(line){
	var getdata2=purchasing.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.purchasingpower-a.purchasingpower));
	getdata2.shift();
fs.createWriteStream('./purchasing.json').write(JSON.stringify(getdata2,null,2));
});

///growth in popualtion in 2010 to 2013
var growth=[];
lineReader.on('line',function(line){
	var jsonFromLine={};
	var lineSplit=line.split(',');
	jsonFromLine.CountryName = lineSplit[0];
	jsonFromLine.Population2010=lineSplit[2];
	jsonFromLine.Population2013=lineSplit[5];
	jsonFromLine.purchasingpower2010=lineSplit[14];
	jsonFromLine.purchasingpower2013=lineSplit[17];

growth.push(jsonFromLine);
console.log(growth);

})

lineReader.on('close',function(line){
var l=growth.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
	});
l.shift();
fs.createWriteStream("growth.json").write(JSON.stringify(l,null,2));
});