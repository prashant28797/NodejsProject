var fs=require('fs');
var output = [];

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

lineReader.on('line', function (line) {
  var jsonFromLine = {};
  // var Population=Population;
   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.Area = lineSplit[1];
    jsonFromLine.population = lineSplit[5];
    jsonFromLine.GDP=lineSplit[9];
    jsonFromLine.purchasingpower=lineSplit[17];
    // ...  
    output.push(jsonFromLine);
  
  
});

// lineReader.on('line', function (line) {
//    // console.log(output); // list output 
   
//    var str=line.replace(/"([^"]+(?="))"/g, '$1');
//     mywritestream.write(JSON.stringify(str,null,2));
// });




var filter1=[];

lineReader.on('close',function(line){
  mywritestream.write(JSON.stringify(output,null,2));
});



//lineReader

// json for sorted of population column

var obj=[];
var obj1;


lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');

		 jsonFromLine.CountryName = lineSplit[0];

		 jsonFromLine.population = lineSplit[5];
		 obj.push(jsonFromLine);

		 if(jsonFromLine.CountryName != 'European Union' && jsonFromLine.CountryName != 'World')
		 {

 obj1=obj.sort((a,b)=>(b.population-a.population));
//.map(e => ( return e.CountryName; ));

//	filter1.push(jsonFromLine););
}



//console.log(obj[0].population);

});


//console.log(obj1);

lineReader.on('close',function(line){

mywritestream1.write(JSON.stringify(obj1,null,2));
})




//sorting of  gdp pf country
var gdp=[];
//var obj1;


lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');

		 jsonFromLine.CountryName = lineSplit[0];

		 jsonFromLine.GDP = lineSplit[9];
		 gdp.push(jsonFromLine);

		 if(jsonFromLine.CountryName != 'European Union' && jsonFromLine.CountryName != 'World')
		 {

 gdp1=gdp.sort((a,b)=>(b.GDP-a.GDP));
//.map(e => ( return e.CountryName; ));

//	filter1.push(jsonFromLine););
}



//console.log(obj[0].population);

});


//console.log(obj1);

lineReader.on('close',function(line){

mywritestream2.write(JSON.stringify(gdp1,null,2));
})





//Sorting purchasing power

var purchasing=[];
//var obj1;


lineReader.on('line',function(line){
		var jsonFromLine={};
		var lineSplit=line.split(',');

		 jsonFromLine.CountryName = lineSplit[0];

		 jsonFromLine.purchasingpower = lineSplit[17];
		 purchasing.push(jsonFromLine);

		 if(jsonFromLine.CountryName != 'European Union' && jsonFromLine.CountryName != 'World')
		 {

   purchasing.sort((a,b)=>(b.purchasingpower-a.purchasingpower));
//.map(e => ( return e.CountryName; ));

//	filter1.push(jsonFromLine););
}



//console.log(obj[0].population);

});


//console.log(obj1);

lineReader.on('close',function(line){

mywritestream3.write(JSON.stringify(purchasing,null,2));
})





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

var prashant=0;
var big=[];
lineReader.on('close',function(line){

//console.log(continent)
 agr.filter(function(e)
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
	console.log(popu[continent[i]]);
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