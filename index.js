const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const {Pool} = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/times', (req, res) => res.send(showTimes()))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

showTimes = () => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result;
}

app.get('/customers', (req, res) => {
    

      connection.query('SELECT * FROM Customer ', req.params.countryCode, function (error, results, fields) {
      if (error) throw error;
      //console.log('The solution is: ', results); ** This displays to the page instead of console **
      //data = results[0];
      res.json(results);
//       connection.end();
    });

    
})

function isValid(Username, Password){
    const hmac = crypto.createHmac('sha256', 'poop');
    hmac.update('password');
    console.log(hmac.digest('hex'));
    var client = await pool.connect()
    var result = await client.query('SELECT * FROM account_tableshehe');
    var results = {'results': (result) ? result.rows : null};
}
