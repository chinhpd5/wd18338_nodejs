import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        Type: String
    },
    price: {
        Type: Number
    }
})

export default mongoose.model('products',productSchema)