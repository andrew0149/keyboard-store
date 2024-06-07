const express = require('express')
const { Pool } = require('pg');
const app = express()
const port = 8080
const cors = require("cors");
app.use(cors());

const pool = new Pool({
    user: 'store',
    host: 'localhost',
    database: 'store',
    password: 'password123',
    port: 5432,
  });
  
  app.use(express.json());

app.get('/products_list', async (req, res) => {
        try{
         const query = 'select * from shoplist';
         result = await pool.query(query);
        res.status(200).send(result.rows);
        }
        catch (err){
        console.error(err);
        res.status(500).send('error accessing database');
        }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
