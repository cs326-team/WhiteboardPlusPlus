import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const LoginSchema = new Schema(
    {
        name: String,
        password: String
    }
);

export default mongoose.model('login',LoginSchema)