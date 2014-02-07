var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.bodyParser());

app.use(express.static(__dirname + '/squak'));
app.use(express.static(__dirname ));


app.post('/savefile/:filename',function(req,res){

  // Get the filename from the parameters
  var filename =req.param('filename');
  console.log("We got the filename:" + filename);

 console.log("Body contains :" + req.files.squak.size);
 console.log("Body contains :" + req.files.squak.path);
 console.log("Body contains :" + req.files.squak.name);
 console.log("Body contains :" + req.files.squak.type);
 fs.readFile(req.files.squak.path, function (err, data) {
   // ...
   //var newPath = __dirname +"/squak/app/sounds"+req.files.ft.path + ".wav";
   //var newPath = __dirname +"/squak/app/sounds/"+Date.now() + ".wav";
   var newPath = Date.now() + ".wav";
   fs.writeFile(__dirname+"/squak/app/sounds/"+newPath, data, function (err) {
        console.log(__dirname+"/squak/app/sounds/"+newPath);
     if(err){
       console.log(err);
     } else{
       console.log("Writting file to server.");
     }
     //res.json({"file-location":newPath});
     res.send(newPath);
     //res.redirect("back");
   });
 });

});
app.listen(8080);
console.log('Listening on port 8080');
