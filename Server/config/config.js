const mongoose = require('mongoose')
require('colors')

// Estaliblishing MongoDB and NodeJS connection
const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI   
        const conn = await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`Mongodb DataBase Connected ${conn.connection.host}`.bgRed.white);
    } catch (error) {
        console.log(`error: ${error.message}`.bgRed.white);
    }
}
module.exports = connectDB;