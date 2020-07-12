const express = require("express");
const app = express();
app.set('view engine','ejs');
const bodyParser = require("body-parser");
const date =  require(__dirname + '/date.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
var newLists = ["Buy Food","Cook","Eat"];
var workItems = [];

app.listen(8888,function(){
console.log('Started at port 8888');
});
app.get('/',function(req,res){
let day = date.getDate();
res.render('list',{listTitle : day,newListitems: newLists});


});
app.post('/',function(req,res){
    newList = req.body.newItem;
    if(req.body.list === 'Work'){
        workItems.push(newList)
        res.redirect('/work');

    } else {
        newLists.push(newList);
        res.redirect('/');
    }
   
});
app.get('/work',function(req,res){
    res.render('list',{listTitle:"Work List",newListitems: workItems})

});
app.post('/work',function(req,res){
    workList = req.body.newItem;
    workItems.push(workList);
    res.redirect('/work');})
app.get('/about',function(req,res){
    res.render('about');
});  
