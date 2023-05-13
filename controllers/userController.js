const Products=require('../models/product');

const getAllProducts=async(req,res)=>{
    console.log(req.url);
    try{
        const allProducts=await Products.find({});
        if(allProducts==null||allProducts==undefined)
        {
            res.status(200).json({message:"No products in the Collection"});

        }
        else{
            res.status(200).json({products:allProducts});

        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});

    }   
}
const getProductById=async(req,res)=>{
    
//For finding the element by the id we can send the id of the product through two types
        // `  -- Passing the id through the request parameters`
            
        // `  --Passing the id through the request body`

        // Passing through request body is more secure because it is not directly open to anyone always
    console.log(req.url);

    if(req.body.id==undefined){
        res.status(400).json({message:"Id should be provided to find the product by id"});

    }

    try{

        const product=await Products.findById({_id:req.body.id});

        if(product==null||product==undefined){
            res.status(404).json({message:"No product found with the id provided"});
        
        }//If no product founded with the id provided
        else{
            res.status(200).json({product:product});
        }

    }
    catch(err){
        console.log(err);
        res.status(502).json({message:"Bad Gateaway Invalid response received"});
    }
}
const updateProductById=async(req,res)=>{
    if(req.body.id==undefined){
        res.status(400).json({message:"Id should be provided to find the product by id"});
    
    }
    else if(req.body.price==undefined||req.body.price==NaN)
    {
        res.status(400).json({message:"Price is not provided "});
    }
    try
    {
        const product=await Products.findById({_id:req.body.id});

        if(product==null||product==undefined){
            res.status(404).json({message:"No product found with the id provided"});
        
        }//If no product founded with the id provided
        else{
            try
            {
                const updatedProduct=await Products.findByIdAndUpdate({_id:req.body.id},{price:req.body.price});
                console.log(updatedProduct);
                res.status(200).json({product:updatedProduct});
            }//At response it findbyidandUpdate return the founded document not the one which is updated
            catch(err)
            {
                console.log(err);
                res.status(500).json({message:"Internal Server Error"});
            }
        }//Product founded  Updating its price
    }
    catch(err)
    {
        console.log(err);
        res.status(502).json({message:"Bad Gateaway Invalid response received"});
    }
}
const deleteProductById=async(req,res)=>{
    if(req.body.id==undefined){
        res.status(400).json("Id should be provided to find the product by id");
    
    }
    
    try
    {
        const product=await Products.findById({_id:req.body.id});

        if(product==null||product==undefined){
            res.status(404).json({message:"No product found with the id provided"});
        
        }//If no product founded with the id provided
        else{
            try
            {
                const updatedProduct=await Products.findByIdAndDelete(req.body.id);
                console.log(updatedProduct);
                res.status(200).json({product:updatedProduct});
            }//At response it findbyidandDelete return the founded document not the one which is updated
            catch(err)
            {
                console.log(err);
                res.status(500).json({message:"Internal Server Error"});
            }
        }//Product founded  Updating its price
    }
    catch(err)
    {
        console.log(err);
        res.status(502).json({message:"Bad Gateaway Invalid response received"});
    }
}
const addProduct=async(req,res)=>{
    console.log(req.url);

   //In schema of the product collection Name and Price Field are necessary
   if(req.body.name==undefined||req.body.price==undefined){

       if(req.body.name==undefined && req.body.price==undefined){
           res.status(400).json({message:"Both name and price not provided for product which is to be inserted"});

       }

       else if(req.body.name==undefined){
           res.status(400).json({message:"Incomplete information:Name of Product Should be Provided!!"});

       }//Checking if user has given a name of product or not
          

       else if(req.body.price==undefined){
           res.status(400).json({message:"Incomplete information:Price of Product Should be Provided!!"});

       }//Checking if user has given a name of product or not
          
   }
   
   
try{
   //creating the object of collection to insert the product info in it.
   const Data =new Products({
       name:req.body.name,
       description:req.body.description,
       price:req.body.price

   });
   

   //saving the data into the collection
   const product=await Data.save();

   //The request is succesfull
   res.status(200).json({product:product});
}
catch(err){
   console.log(err);
   res.status(502).json({message:"Bad Gateaway Invalid response received"});
}
}
module.exports={getAllProducts,getProductById,updateProductById,deleteProductById,addProduct};