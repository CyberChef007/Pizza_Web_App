//Schema Creation
const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    varients: [],
    prices: [],
    category: {
        type:String,
        require:true
    },
    image: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    }
},{timestamps:true}
);

const pizzaModel = mongoose.model('pizza',pizzaSchema) //pizza will be the collection name based on pizzaSchema named Schema

module.exports = pizzaModel;