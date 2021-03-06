import {Schema, model} from 'mongoose'

const videoSchema = new Schema( {
    title:{
        type:String,
        required:true,
        trim:true

    },
    description: {
        type:String,
        trim:true
    },
    url: {
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps: true
});
export default model('video',videoSchema);
