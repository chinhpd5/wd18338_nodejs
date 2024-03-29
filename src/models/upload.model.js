
import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    
},{timestamps: true})

export default mongoose.model("upload",uploadSchema)

