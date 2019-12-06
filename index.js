const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000 
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: "postgres://gzbuqqyafwsbgp:5a238821cf1bdb550f0c138371a68166c12acbbc62343f4d13ed62b3bc993223@ec2-174-129-229-106.compute-1.amazonaws.com:5432/dantp8tri79sji",
  ssl: true
}); 


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/db', async (req, res) => {
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

    .get('/customers', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Customer"');
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
   

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



    


