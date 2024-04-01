import Product from '../models/product.model.js';
import Category from '../models/category.model.js';

//[GET]: product
export function index(req,res){
    // số phần tử có trong 1 trang
    const limit = req.query.limit || 10;
    // vị trí trang
    const page = req.query.page || 1;
    // số phần tử loại trước đó
    const skip = (page - 1) * limit;

    const filter = {}
    if(req.query.name){
        filter.name = {$regex : req.query.name};
    }
    //$lt: less than (nhỏ hơn) 
    //$gt: great than (lớn hơn)
    //$lte:less than equa (nhỏ hơn hoặc bằng) 
    //$gte: great than equa(lớn hơn hoặc bằng)
    if(req.query.min){
        filter.price ={$lte : req.query.min}
    }

    if(req.query.max){
        filter.price ={$gte : req.query.max}
    }

    //sắp xếp
    // 1 từ bé đến lớn
    // -1 từ lớn đến bé
    const sort ={price: -1}

    // console.log(filter);

    Product.find(filter).skip(skip).limit(limit).sort(sort)
        .populate('categoryId')
        .then(data=>{
            if(data.length){
                res.json(data)
            }else{
                res.json({message: "Không có dữ liệu"})
            }
        })
        .catch(()=>{
            res.json({message: "Có lỗi khi lấy dữ liệu"})
        })
}
//[GET]: product/category/:id
export async function getProductByCategoryId(req,res){
    try {
        const cateID = req.params.id;
        // console.log(cateID);
        const listData = await Product.find({categoryId: cateID}).populate("categoryId");
        res.status(200).json(listData);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//[POST]: product
export function addProduct(req, res){
    let data = req.body;
    if (data) {
        Product.create(data)
            .then(data=>{
                res.json(data)
            })
            .catch(()=>{
                res.json({message: "Có lỗi khi thêm sản phẩm"})
            })

    }
    else
        res.send("Không lấy được dữ liệu")
}
//[GET]: product/:id
export function getById(req,res){
    const id = req.params.id;
    if(id){
        Product.findById(id).populate('categoryId')
            .then(data=>{
                if(data)
                    res.json(data);
                else 
                    res.json({message: "Không tìm thấy sản phẩm"})
            })
    }else{
        res.json({message: "Không tìm thấy id sản phẩm"})
    }
}
//[PUT]: product/:id
export function update(req,res){
    const id = req.params.id;
    if(id){
        const data = req.body;
        if(data != {}){
            //update
            Product.findByIdAndUpdate(id,data,{new: true})
                .then(data=>{
                    res.json(data)
                })
                .catch(()=>{
                    res.json({message: "Sửa lỗi"})
                })
        }else{
            res.json({message: "Không nhận được sản phẩm"})
        }

    }else{
        res.json({message: "Không tìm thấy id sản phẩm"})
    }
}


//[DELETE]: prduct/:id
export function remove(req,res){
    const id = req.params.id;
    if(id){
        Product.findByIdAndDelete(id)
            .then((data)=>{
                res.json(data)
            })
            .catch(()=>{
            res.json({message: "Xóa thất bại"})

            })
    }else{
        res.json({message: "Không tìm thấy id sản phẩm"})
    }
}