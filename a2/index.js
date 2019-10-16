const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

app.get('/users',(req, res)=>{
    var getUsersQuery = 'SELECT * FROM public."TOKIMONS"';
    pool.query(getUsersQuery, (error, result)=>{
        if(error)
            res.end(error);
        var result = {'rows': result.rows};
        res.render('page/users', results);
    })
})
app.post('/tokimon', (req, res)=>{
    var toki = req.body.name;
    var tra = req.bofy.trainer;
    var weit = req.body.weight;
    var heit = req.body.height;
    var fy = req.body.fly;
    var figt = req.body.fight;
    var fir = req.body.fire;
    var wter = req.body.water;
    var elec = req.body.electric;
    var frz = req.body.frozen;
    var tot = req.body.total;
    if(toki != ''){
        var insert = 'INSERT INTO tokimons(name, trainer, weight, height, fly, fight, fire, water, electric, frozen, total) VALUES('${toki}',${tra},${weit},${heit},${fy},${figt},${wter},${elec},${tot});';
        pool.query(insert, (error, result)=>{
            if(error)
                res.end(error);
        })
        res.render('pages/tokimon');
    }
    else{
        res.render('pages/errors', {reason: "Tokimon's name must be filled"});
    }
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
