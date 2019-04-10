import whiteboardSchema from '../scripts/WhiteboardSchema';
const express = require('express');
const wbRouter = express.Router();

wbRouter.route('/api/whiteboard/:wbid').get((req,res) => {
    whiteboardSchema.findById(req.params.id, (err, whiteboard) => {
        console.log("TEST");
        console.log(whiteboard);
        res.json(whiteboard);
    });
});
