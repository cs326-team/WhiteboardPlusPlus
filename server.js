
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




wbRouter = express.Router();
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost:27017/WhiteboardDB', {useNewUrlParser: true});
const Schema = mongoose.Schema;

const WhiteboardSchema = new Schema(
    {
        _id: String,
        URI: String
    }, {versionKey:false}
);

WhiteboardTest = mongoose.model('whiteboards',WhiteboardSchema)


wbRouter.route('/list').get((req,res) =>{
  WhiteboardTest.find({}, (err,whiteboards) => {
    res.json(whiteboards);
    console.log("Test");
  })
});
//curl --header "Content-Type: application/json" \
//   --request POST \
//   --data '{"_id":"xyz","URI":"xyz"}' \
//   http://localhost:3000/api/whiteboard/list
wbRouter.route('/list').post((req, res) => {
    let test2 = mongoose.model('whiteboards',WhiteboardSchema);
    let test = new test2(req.body);
    console.log(test);
    test.save();
    res.status(201).send(test);
});

wbRouter.route('/:id').get((req,res) => {
  WhiteboardTest.findById(req.params.id, (err, whiteboard) => {
      res.json(whiteboard);
  });
});



app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/whiteboard/', wbRouter);


app.listen(3000, () => {
    console.log('App started on port 3000');
  });
