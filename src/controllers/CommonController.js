import Upload from '../models/upload.model.js'

export function UploadDB(req,res){
    const data = req.body;
    // console.log(data);
    if(!data || data =={})
        return res.json({message: "Thiếu dữ liệu"});

    Upload.create(data)
        .then(resData => res.json(resData))
        .catch(err=> res.json({message: err}))
}