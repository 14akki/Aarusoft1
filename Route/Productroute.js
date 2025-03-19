const express = require('express');
const router = express.Router();



const {createProductController, getAllProductController,updateProductStatusByIdController, getProductByIdController, getProductByNameController, deleteProductByIdController,} = require('../Controller/Productcontroller');




router.post('/create', createProductController);
router.get('/',getAllProductController);
router.get('/getbyid/:id', getProductByIdController);
router.get('/getProductbyname/:name', getProductByNameController );
router.put('/:id', updateProductStatusByIdController);
router.delete('/:id', deleteProductByIdController);



module.exports = router;