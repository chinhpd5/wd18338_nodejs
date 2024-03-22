import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

// [GET]: user
export function GetList(req,res){
    const query = req.query;
    const filter={};
    if(query.name)
        filter.name = query.name;

    User.find(filter)
    .then(data=>{
        if(data.length)
            res.json(data)
        else
            res.json({message: "Không có dữ liệu"})
    })
    .catch(()=>{
        res.json({message: "Lấy danh sách lỗi"})
    })
}

// [POST] user/signup
// Đăng kí
export async function signup(req, res){
    const data = req.body;
    //check email
    const userExist= await User.findOne({email: data.email});

    if(userExist){
        return res.json({
            message: `Đã tồn tại email ${data.email}`
        })
    }

    // Mã hóa mật khẩu
    const passwordHashed = await bcryptjs.hash(data.password, 10);

    // thay thế password cũ bằng password đã mã hóa
    data.password = passwordHashed;
    
    User.create(data)
        .then((newData)=>{
            res.json(newData);
        })
        .catch((err)=>{
            res.json({message: err});
        })
    
}

export function Update(req, res){
    const id = req.params.id;
    // console.log(id);
    if(id){
        const data = req.body;
        // console.log(data);
        if(data != {}){
            User.findByIdAndUpdate(id,data,{new : true})
                .then(newData=> res.json(newData))
                .catch((err)=> res.json(err))
        }else{
            //check
        }
    }else{
        //check
    }
}

export function Remove(req,res){
    const id = req.params.id;
    // console.log(id);
    if(id){
        User.findByIdAndDelete(id)
            .then(newData=> res.json(newData))
            .catch((err)=> res.json(err))
    }else{
        //check
    }
}

export function getById(req,res){

    const id = req.params.id;
    // console.log(id);
    if(id){
        User.findById(id)
            .then(newData=> res.json(newData))
            .catch((err)=> res.json(err))
    }else{
        //check
    }

}
