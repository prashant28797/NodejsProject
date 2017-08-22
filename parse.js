var fs=require('fs');
var Asia =['India','China','Japan','Saudi Arabia','Republic of Korea','Turkey','Indonesia'];
var Europe=['France','Germany','Italy','Russia','United Kingdom'];
var Africa=['South Africa'];
var America=['Brazil','Canada','Mexico'];
var popu=[];
var continent=[Asia,Europe,Africa,America];

//var count = 0

var lineReader = require('readline').createInterface({
  input: fs.createReadStream('/home/traning/Desktop/da.csv')
});

var mywritestream=fs.createWriteStream('/home/traning/Desktop/data.json');

var mywritestream1=fs.createWriteStream('./data1.json');

var mywritestream2=fs.createWriteStream('./gdp.json');

var mywritestream3=fs.createWriteStream('./purchasing.json');


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
var getdata=obj.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.popualtion-a.population));
getdata.shift();
//console.log(getdata);
mywritestream1.write(JSON.stringify(getdata,null,2));
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
mywritestream2.write(JSON.stringify(getdata1,null,2));
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
mywritestream3.write(JSON.stringify(getdata2,null,2));
});





///growth in popualtion in 2010 to 2013


var growth=[];

lineReader.on('line',function(line){

	var jsonFromLine={};
	var lineSplit=line.split(',');

	jsonFromLine.CountryName = lineSplit[0];
	jsonFromLine.Population2010=lineSplit[2];
	jsonFromLine.Population2013=lineSplit[5];
	jsonFromLine.purchasingpower2010=lineSplit[15];
	jsonFromLine.purchasingpower2013=lineSplit[18];

growth.push(jsonFromLine);

})




//AGGREGATE THE CONTINENT
var agr=[];

lineReader.on('line',function(line){

	var jsonFromLine={};
	var lineSplit=line.split(',');

	jsonFromLine.CountryName=lineSplit[0];
	jsonFromLine.popualtion=lineSplit[2];

//agr.shift();
agr.push(jsonFromLine);
//console.log(agr);
});
//console.log(agr);
var g;

lineReader.on('close',function(line){
	//agr.shift();
	//console.log(agr);
  g=agr.filter(function(data)
{
	if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}

		});

// console.log(g);

});

//// foreach (var item in agr) {
//   console.log(agr);
// }


var prashant=0;
var big=[];

 var cities = [
    {name: 'India', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

var bigCities = [];
//console.log(agr[0]);
for (var k of cities)

{
	console.log(cities.length);
	for(var i=0;i<continent.length;i++)
	{
		console.log(continent.length);
	for(var j=0;j<continent[i].length;j++)

		{
			//console.log(continent[i][j]);
			if(k.name == continent[i][j])

			{
				//console.log(k.popualtion);
						popu[continent[i]]= popu[continent[i]] +  k.popualtion;
			
			}
		}
	}

}

 big.push(popu);
//console.log(popu);




// lineReader.on('close',function(line){
//   console.log(filter);
// });


//'{'+"CountryName"+':''"'+e.CountryName+'"'+','+"population"+':'+'"'+e.population+'"'+'}'

//console.log(obj.population);

//lineReader.on('line',function(line){

 //console.log('new chunk received:');
 //console.log(chunk);

// mywritestream.write(JSON.stringify(output));


//});

// console.log("fkj");
// output.filter(function (e){
//   return e.population < 300000;
//   console.log("hshva");
// }).sort().map(function (e){
//     console.log(e.Area+':'+ e.population)
//   });
//console.log(population);