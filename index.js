const express = require('express')
const { Pool } = require('pg');
const app = express()
const port = 8080
const cors = require("cors");
app.use(cors());
app.use(express.json())
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
app.post('/place_order', async (req, res) => {
	try{
	 const reply = await req.body;
	 try{
	  
	  const values = await reply["values"];	 
	  const query = `insert into orders ("email", "phone", "name","amount", "keyboard_ids") values ($1, $2, $3, $4, $5) returning id`;	 
	  const result = await pool.query(query, values);
	  const update_query = `update shoplist set stock = stock - $1 where id = $2;`
	  for(index in values[4]){
		update_values = [values[3][index], values[4][index]]
		const update_result = await pool.query(update_query, update_values);
	  }
	  res.status(201).send({ message: 'Order placed', orderID: result.rows[0].id});
	 }
	catch (err){
	console.log(err)}
	}
	catch (err){
	console.log(err)
	res.status(500).send('some error has occured');}
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
