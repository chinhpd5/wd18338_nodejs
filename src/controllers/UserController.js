import User from "../models/user.model.js"

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
