const MongoClient = require('mongodb').MongoClient;

/*
MongoClient.connect('mongodb://localhost/playground',function(err,db) {
    db.collection('employees').find().toArray(function(err,docs) {
        console.log('result of find:',docs);
        db.close()
    });
});
*/

MongoClient.connect('mongodb://localhost', (err,client) => {
    const db = client.db('WhiteboardDBTest');
    db.collection('login').find().toArray(function(err,docs) {
        console.log("result of find:",docs);
        client.close();
    });
});

