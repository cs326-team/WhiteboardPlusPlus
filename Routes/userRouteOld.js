// import express from 'express';
// import User from '../scripts/LoginSchema';
// const userRouter = express.Router();

// userRouter.route('/').get((req,res) => {
//     User.find({},(err,users) => {
//         res.json(users);
//     });
// });

// userRouter.route('/:name').get((req,res) => {
//     User.findOne({name:req.query.name}, (err,users) => {
//         res.json(users);
//     });
// });

// //Creating a user
// userRouter.route('/Create').post((req,res) => {
//     const userName = req.body.name;
//     User.find({name:userName}, (err,users) => {
//         console.log(user);
//         if(err)
//         {
//             res.status(500).json({message:`Internal Server error: ${err}`})
//             return;
//         }
//         if(users.length()) //User found in DB
//         {
//             res.status(415).json({message: 'Username already taken'})
//             return;
//         }
//         let newUser = new User(req.body);
//         newUser.save();
//         res.status(201).send(newUser)
//     });
    
// });


