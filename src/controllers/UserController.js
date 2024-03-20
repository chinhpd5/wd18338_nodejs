import User from "../models/user.model.js"

// [GET]: user
export function GetList(req,res){
    User.find()
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

// [POST] user

export function Add(req, res){
    const data = req.body;
    if(data !={}){
        User.create(data)
            .then(newData => res.json(newData))
            .catch((err)=> 
            res.json({message: err}))
    }else{
        res.json("lỗi")
    }
}
