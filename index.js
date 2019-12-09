const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000 
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: "postgres://gzbuqqyafwsbgp:5a238821cf1bdb550f0c138371a68166c12acbbc62343f4d13ed62b3bc993223@ec2-174-129-229-106.compute-1.amazonaws.com:5432/dantp8tri79sji",
  ssl: true
})

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
    .get('/employees', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Employee"');
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

   .get('/customers/:id', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM it_302_fin_app.customer WHERE id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

.get('/customers/:id/accounts', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Customer" WHERE customer_id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

.get('/customers/:id/positions', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Customer" WHERE customer_id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

.get('/accounts', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Account"');
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
.get('/accounts/:id', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Account" WHERE id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })



.get('/employees', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Employee"');
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


.get('/employees/:id', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Employee" WHERE id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/employees/:id/accounts', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Employee" WHERE employee_id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/assets', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Asset"');
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/assets/:id([0-9]+)', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Asset" where id = $1', [req.params.id]);
      const results =  (result) ? result.rows : [];
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .get('/assets/:symbol([a-zA-Z]{1,4})', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM public."Asset" where UPPER(symbol) = $1', [req.params.symbol]);
      const results =  (result) ? result.rows : [];
        
      https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=uKzJWCZDbgYXOs7zqguG1DJ8bLqwOnv1UB7FRS7visXp81nXpvIsokIz3Mno  
        
        
      res.json(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



    


