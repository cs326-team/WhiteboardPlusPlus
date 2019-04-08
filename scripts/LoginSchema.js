const MongoClient = require('mongodb').MongoClient;

const Schema = MongoClient.Schema;

const LoginSchema = new Schema(
    {
        name: String,
        password: String
    }
);