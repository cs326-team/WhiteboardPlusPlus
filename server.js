import userRouter from './Routes/User-Router';
import mongoose from 'mongoose';
const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const db = mongoose.connect('mongodb://localhost:27017/WhiteboardDB', {useNewUrlParser: true});


const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRouter);

// const LoginSchemaTypes = {
//         name: 'required',
//         password: 'required'
//     };
// function validateLogin (login)
// {
//     for(const field in login)
//     {
//         const type = loginSchemaTypes[field];
//         if(!type) //Should the type not exist, remove it since it is not required
//         {
//             delete login[field];
//         }
//         else if (type ==='required' && !login[field]) //The type is set to required, but we are not supplied it
//         {
//             return `${field} is required.`;
//         }
//         //Should probably use regex to validate the characters of the username/password to prevent sql/js injection here.
//         //Talk to blake about if this is where we should handle this or if it should be handled by the front-end input-collection.
//         //IE: We can validate the data before creating the query, or we could create the query and validate it before sending it to the DB.
//     }
//     return null;
// }
// app.get('/api/Login/List',(req,res) =>
// {
//     const filter = {};
//     if(req.query.name)
//     {
//         filter.status = req.query.name;
//     }
//     db.collection.find(filter).toArray().then(users => 
//         {
//             const metaData = {total_count: users.length};
//             res.json({_metadata: metaData, records: users})
//         }).catch(error => {
//             console.log(error);
//             res.status(500).json({message: `Internal Server Error: ${error}` });
//         });
// });
// app.post('/api/Login/Request', (req,res) => {
//     const newLogRequest = req.body; 
//     const newLogRequestName = req.body.name;
//     const newLogRequestPW = req.body.password;
//     err = validateLogin(newLogRequest);
//     if (err) {
//         res.status(415).json({ message: `Invalid request: ${err}` });
//         return;
//       }
//     db.collection('login').find({newLogRequestName}).toArray().then(user => {
//             if(!user) //User doesn't exist in DB
//             {
//                 res.status(404).json({message: "Username not found"});
//                 return;
//             }
        
//         if(user.password !== newLogRequestPW) //Password does not match (Look into Bcrypt in the future)
//         {
//             res.status(400).json({message: "Username or password is incorrect"});
//             return;
//         }
//         //User-Password Combo is correct, create payload
//         const payload = {id: user._id, name: user.name};
//         res.json({success:"Success", userInfo:payload});
        
        

//     }); //End User function
// });//End Post Login/Request

app.listen(3000, () => {
    console.log('App started on port 3000');
  });

// let db;
// MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
//   db = connection.db('WhiteboardDB');
//   app.listen(3000, () => {
//     console.log('App started on port 3000');
//   });
// }).catch(error => {
//   console.log('ERROR:', error);
// });