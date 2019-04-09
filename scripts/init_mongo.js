const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', (err,client) => {
    const db = client.db('WhiteboardDBTest1');
    db.collection('login').find().toArray(function(err,docs) {
        console.log("result of find:",docs);
        client.close();
    });
});

