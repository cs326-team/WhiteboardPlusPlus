const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', (err,client) => {
    const db = client.db('WhiteboardDB');
    db.collection('whiteboards').remove({}); //Clear the database to ensure we have a fresh start
    db.collection('whiteboards').insert(
        {
            _id: 1,
            URI: "12345"
        });
    db.collection('whiteboards').insert(
        {
            _id: 2,
            URI: "123"
        });
    db.collection('whiteboards').insert(
        {
            _id: 3,
            URI: "13"
        });
});