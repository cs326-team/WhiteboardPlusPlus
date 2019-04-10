// import express from 'express';
// import whiteboardSchema from '../scripts/WhiteboardSchema';
// const whiteboardRouter = express.Router();

// whiteboardRouter.route('/').get((req,res) => {
//     whiteboardSchema.find({},(err,whiteboard) => {
//         res.json(whiteboard);
//         console.log(res);
//         console.log(whiteboard);
//         console.log("Testing");
//     });
// });


// whiteboardRouter.use('/:WBId', (req, res, next)=>{
//     console.log("I run first")
//     next()
// })
// whiteboardRouter.route('/:WBId')
//     .get((req,res)=>{
//         whiteboardSchema.findById(req.params.WBId, (err, whiteboard) => {
//             res.json(whiteboard)
//         });
//     });