import Upload from '../models/upload.model.js'
import 'dotenv/config'

export function UploadDB(req,res){
    const data = req.body;
    // console.log(data);
    if(!data || data =={})
        return res.json({message: "Thiếu dữ liệu"});

    Upload.create(data)
        .then(resData => res.json(resData))
        .catch(err=> res.json({message: err}))
}
//[GET] /image
export function getImage(req,res){
    Upload.find()
        .then(resData=>{
            resData = resData.map(item=>{
                return {
                    id: item._id,
                    filename: process.env.URL_API + item.image
                }
            })

            res.json(resData)
        })
        .catch(err=>{
            res.json(err)
        })
}