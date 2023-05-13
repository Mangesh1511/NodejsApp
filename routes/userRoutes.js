const express=require('express')
const router=express.Router();
const Products=require('../models/product');
const {getAllProducts,getProductById,updateProductById,deleteProductById,addProduct}=require('../controllers/userController')

router.get('/',async(req,res)=>{
    console.log('In the basic request of the router\n');
    res.json('In the basic request of the router');
});

//Gives all the products details
router.get('/findAll',getAllProducts);

//Add the products
router.post('/insert',addProduct);

//Get the product information by its ID
router.get('/findById',getProductById);

//Update product price by its Id
router.put('/updatePriceById',updateProductById);

//Delete the product by its ID
router.delete('/deleteById',deleteProductById)
module.exports=router;