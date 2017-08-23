var fs=require('fs');
var lineReader = require('readline').createInterface({
  input: fs.createReadStream('./da.csv')
});
var agr=[];
lineReader.on('line',function(line){
	var jsonFromLine={};
	var lineSplit=line.split(',');
	jsonFromLine.CountryName=lineSplit[0];
	jsonFromLine.population=lineSplit[2];
	jsonFromLine.GDP=lineSplit[9];
agr.push(jsonFromLine);
 });
var popu=[0,0,0,0];
var gdp=[0,0,0,0];
var con=["Asia","Europe","Africa","America"];
var continent=[['India','China','Japan','Saudi Arabia','Republic of Korea','Turkey','Indonesia'],['France','Germany','Italy','Russia','United Kingdom'],['South Africa'],['Brazil','Canada','Mexico']];
var big=[];
lineReader.on('close',function(line){
	for(var i=0;i<con.length;i++)
	{
		var jsonFromLine={};
	for(var j=0;j<continent[i].length;j++)
		{
			for(var k of agr)
			{
			if(k.CountryName == continent[i][j])
			{
						popu[i]=popu[i]+parseFloat(k.population);
						gdp[i]=gdp[i]+parseFloat(k.GDP);	
			}
		}
		}
	   jsonFromLine.Continent=con[i];
	   jsonFromLine.population=popu[i];
	   jsonFromLine.GDP=gdp[i];
	   big.push(jsonFromLine);
	}
fs.createWriteStream('./aggregate.json').write(JSON.stringify(big,null,2));
})

 
