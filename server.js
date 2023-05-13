require('./connection.js')
const express = require('express')
const Products = require('./models/product.js')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./routes/userRoutes.js');

app.use('/api/user/', userRoutes);

app.get('/', async (req, res) => {
    res.json("Welcome to the app This app provides user to insert update the item if id available and displays all the products!!");

});



app.listen(5000, () => {
    console.log('Server is Listening at the port 5000\n');
})