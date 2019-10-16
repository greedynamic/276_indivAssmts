const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const app = express();
const { Pool } = require('pg');

var pool = new Pool({

connectionString : process.env.DATABASE_URL

})




app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/db'))
app.get('/index', (req, res) => res.render('pages/index'))
app.get('/db', function(req, res){
pool.query("select * from users", function(error, result){

var results = { 'results': (result.rows[0]) ? result.rows : [] };

res.render('pages/db', results);

});

});




app.post('/dele', function(req, res, fields){

var id = req.body.id;
console.log(id);
pool.query("delete from users where id = '"+id+"' ",function(error,results,fields){
if(!error){
res.redirect('/index');

}else{

res.send(error);

}

});

});




app.post('/add', function(req,res,fields){

var name = req.body.name;
var weight = req.body.weight;
var height = req.body.height;
var fly = req.body.fly;
var fight = req.body.fight;
var fire = req.body.fire;
var water = req.body.water;
var electric = req.body.electric;
var frozen = req.body.ice;
var total = req.body.total;
var trainer=req.body.trainer;
var id=req.body.id;

console.log(id,name,weight,height,fly,fight,fire, water,electric, frozen, total,trainer);
var insert=`INSERT INTO users(id,name, weight, height, fly,fight,fire, water, electric, frozen, total, trainer) 
VALUES(${id},'${name}',${weight},${height},${fly},${fight},${fire},${water},${electric},${frozen},${total},'${trainer}')`;

pool.query(insert,function(error,results,fields){
if(!error){
res.redirect('/index');
}else{

res.send(error);

}

});
});

app.post('/update', function(req,res,fields){

var name = req.body.name;
var weight = req.body.weight;
var height = req.body.height;
var fly = req.body.fly;
var fight = req.body.fight;
var fire = req.body.fire;
var water = req.body.water;
var electric = req.body.electric;
var frozen = req.body.frozen;
var total = req.body.total;
var trainer=req.body.trainer;
var id=req.body.id;

console.log(id,name,weight,height,fly,fight,fire, water,electric, frozen, total,trainer);

pool.query("update users set weight="+ weight +",height="+ height +",fly="+ fly +",fight="+ fight+",fire="+ fire +",water="+ water +",electric="+ electric +",frozen="+ frozen +",electric="+ electric +"id="+ id +" where name = '"+name+"'",
function(error,results,fields){

if(!error){

res.redirect('/index');

}else{

res.send(error);

}

});

});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))