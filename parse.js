var fs=require('fs');
var output = [];
//var count = 0

var lineReader = require('readline').createInterface({
  input: fs.createReadStream('/home/traning/Desktop/da.csv')
});

var mywritestream=fs.createWriteStream('/home/traning/Desktop/data.json');

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





lineReader.on('close',function(line){
  mywritestream.write(JSON.stringify(output,null,2));
});


lineReader.on('close',function(line){
var obj=output.filter(e => e.population <300000)
.sort((a,b)=>(b.population-a.population))
.map(e => console.log( '"'+e.population+'"' ));


//console.log(obj);

//console.log(obj[0].population);

});

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