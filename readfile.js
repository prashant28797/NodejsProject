var fs=require('fs');

// var readme = fs.readFileSync('/home/traning/Desktop/datafile(1).csv','utf8');

// fs.writeFileSync('/home/traning/Desktop/datafile.csv',readme);
// console.log("success");

// console.log(readme);

//stream reader
var myreadstream=fs.createReadStream('/home/traning/Desktop/datafile.csv','utf8');
myreadstream.on('data',function(chunk){

 console.log('new chunk received:');
 console.log(chunk);
});