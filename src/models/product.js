import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price:{ 
            type: Number
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories"
        }
    }
)

export default mongoose.model('product',productSchema)