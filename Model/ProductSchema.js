const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    ProductDetail: {
        type: String,
        required: true, 
    },
    Updated_at: {
        type: Date,
        required: true,    
    },
});
//
const product = mongoose.model('product', productSchema);

module.exports = product;