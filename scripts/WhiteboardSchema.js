import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const WhiteboardSchema = new Schema(
    {
        URI: String
    }
);

export default mongoose.model('whiteboards',WhiteboardSchema)