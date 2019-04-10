const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', (err,client) => {
    const db = client.db('WhiteboardDB');
    db.collection('whiteboards').remove({}); //Clear the database to ensure we have a fresh start
});