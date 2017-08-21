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
var getdata1=obj.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.popualtion-a.population));
mywritestream1.write(JSON.stringify(getdata1,null,2));
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
	var getdata=purchasing.filter(function(data){
		if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}
}).sort((a,b)=>(b.purchasingpower-a.purchasingpower));
mywritestream3.write(JSON.stringify(getdata,null,2));
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


agr.push(jsonFromLine);

});

var g;

lineReader.on('close',function(line){
  g=agr.filter(function(data)
{
	if(data.CountryName != 'European Union' && data.CountryName != 'World')
		{
        return data.CountryName;
		}

		});

 console.log(g);

});

var prashant=0;
var big=[];
lineReader.on('close',function(line){

//console.log(continent)
 g.filter(function(e)
{
	
	//console.log(continent);
	for(var i=0;i<continent.length;i++)
	{
		//console.log(continent[i]);
		for(var j=0;j<continent[i].length;j++)
		{
			//console.log(continent[i][j]);
			if(e.CountryName == continent[i][j])
			{
				//console.log(e.popualtion);
				//var h = parseInt(e.popualtion);
      //console.log(continent[i]);
       //console.log(e.popualtion);

				popu[continent[i]]= popu[continent[i]] +  e.popualtion;
			
			}
	//console.log(popu[continent[i]]);
		}

		
	}


	
});

 big.push(popu);
//console.log(prashant);
console.log(popu);
});




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