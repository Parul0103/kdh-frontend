const mongoose = require('mongoose');
// const dotenv = require('dotenv')


const connectDatabase = () => {
    // mongoose.connect(process.env.DB_LOCAL_URI, {
    mongoose.connect("mongodb://localhost:27017/kdh", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase