import mongoose from "mongoose";

function validateEmail(textEmail){
    return /^\S+@\S+\.\S+$/.test(textEmail) //regex
}

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true, // chuyển về in thường
        trim: true, // xóa khoảng trắng đầu và cuối
        minLength:[5,"Cần nhiều hơn 5 kí tự"], // độ dài tối thiểu
        maxlength:[20,"Cần ít hơn 20 kí tự"],// độ dài tối đa
        unique: true, // không trùm lặp
        required: [true, "Không được để trống tên"], // yêu cầu cần có
        default: "chinhpd" // giá trị mặc định
    },
    age:{
        type: Number,
        min: [0,"Tuổi cần lớn hơn 0"], //giá trị nhỏ nhất
        max: [100, "Tuổi cần nhỏ hơn 100"], //giá trị lớn nhất
    },
    email:{
        type: String,
        validate:{
            validator: validateEmail,
            message: "Không đúng định dạng email"
        }
    },
    gender: {
        type: Boolean
    }
},{timestamps: true});

export default mongoose.model("user",UserSchema);