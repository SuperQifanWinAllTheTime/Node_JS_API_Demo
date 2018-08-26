const express = require('express')
const pg = require('pg')
var path=require('path')// add path for rest-api
const app = express()

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html

//--------added connection to database--------
const pool = new pg.Pool({
  database: 'work_samples',
  host:'work-samples-db.cx4wctygygyq.us-east-1.rds.amazonaws.com' ,
  user: 'readonly',
  password: 'w2UIO@#bg532!',
  port: 5432,
  connectionTimeoutMillis: 1000,
})
//--------end of connection------------

const queryHandler = (req, res, next) => {
  pool.query(req.sqlQuery).then((r) => {
    return res.json(r.rows || [])
  }).catch(next)
}
const queryHandlerS = (req, res, next) => {
  var isfuzzy=req.isfuzzy;
  var userInput=req.userInput;
  var searchQ=req.searchQ;
  if(req.isResult>0){
  pool.query(req.sqlQuery).then((r) => {
    res.render('result',{arr:(r.rows||[]),isfuzzy: isfuzzy, userInput : userInput, searchQ : searchQ} );
  }).catch(next)
  }else{
    res.render('hello_message', { hellomessage: 'Sorry, nothing is found 🤔' });
  }
}
//result : res.json(r.rows || [])
//app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))//add css files path
//app.use(express.static(path.join(__dirname,'routes')))//add routes path
//----------- use jsx as view engine to display react js ----------------
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//app.use(express.static(path.join(__dirname,'views')))
//------------ end of setting view engine
app.get('/', require('./routes').index);
app.get('/search', require('./routes').search,queryHandlerS);
app.get('/events/hourly', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/events/daily', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/stats/hourly', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, impressions, clicks, revenue
    FROM public.hourly_stats
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/stats/daily', (req, res, next) => {
  req.sqlQuery = `
    SELECT date,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/poi', (req, res, next) => {
  req.sqlQuery = `
    SELECT *
    FROM public.poi;
  `
  return next()
}, queryHandler)

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`)
  }
})

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  process.exit(1)
})
//note: 
//instaled package 
//npm install
//npm install express-react-views react react-dom