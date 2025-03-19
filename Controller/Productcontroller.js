
const { createProduct,getAllProduct, getProductById, getProductByName, updateProductById, deleteProductById,} = require('../Business/Product');

const {format} = require('date-fns');



const createProductController = async (req, res) =>{
    const newItem = {
        ProductName: req.body.ProductName,
        ProductDetail:req.body.ProductDetail,
    
        Updated_at: format( new Date(), 'yyyy-MM-dd HH:mm'),

    };
    const item = await createProduct(newItem);
    res.status(202).json(item);

};

const getAllProductController = async(req, res)=>{
    const items = await getAllProduct();
    res.status(202).json(items);
}

const getProductByIdController = async (req, res) =>{
    const {id} = req.params;
    const item = await getProductById(id);
    if(!item){
        res.status(404).json({message: 'Given Id not found!!'});
    }
     else{
        res.status(200).json(item);

     }   
    }

const getProductByNameController = async (req, res)=>{
    const {ProductName} = req.params;
    const item = await getProductByName(ProductName);
    if(!item){
        res.status(404).json({message: 'Given Product Name not found!!'});
    }
    else{
        res.status(200).json(item);
    }
} 



const updateProductStatusByIdController = async (req, res)=>{
    try{
        const {id} = req.params;
    let Data = await getProductById(id);
    if(!Data){
        res.status(404).json({message: 'Given Product Id not exist!!'});        
    }
    Data.ProductName = req.body.ProductName;
    Data.ProductDetail = req.body.ProductDetail;
    Data.updated_at = format( new Date(), 'yyyy-MM-dd HH:mm');
    const item = await updateProductById(id, Data);
    if(!item){
        res.status(404).json({message: 'Given Product Id not exist!!'});
    }else{
        res.json(item);
    }


    }catch(err){
        res.status(500).send(err);
    }
}

const deleteProductByIdController = async (req, res) =>{
    const {id} = req.params;
    const deletedProduct = await deleteProductById(id);
    if(!deletedProduct){
        res.status(404).json({message: "Given Product id does not exist"});
    }else {
        res.json({message : `Product  deleted`});
    }
}


module.exports = {
    createProductController,
    getAllProductController,
    getProductByIdController,
    getProductByNameController,
    updateProductStatusByIdController,
    deleteProductByIdController,
    
}