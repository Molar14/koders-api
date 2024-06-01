const mongoose = require("mongoose")
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect(){
    return mongoose.connect(MONGO_URL)
}

module.exports = {connect}