const mongoose = require('mongoose');
const dotenv = require('dotenv')


const connectDatabase = () => {
    // mongoose.connect(process.env.DB_LOCAL_URI, {

    // mongoose.connect("mongodb://localhost:27017/kdh", {

    //mongodb+srv://parul7663:<password>@cluster0.h7tw086.mongodb.net/
    mongoose.connect('mongodb+srv://parul0103:snoi.0103@cluster0.y6txdzp.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase
