const products = [
    {
        id: 1,
        name: "product 1",
        price: 2000
    },
    {
        id: 2,
        name: "product 2",
        price: 2000
    },
    {
        id: 3,
        name: "product 3",
        price: 2000
    },
    {
        id: 4,
        name: "product 4",
        price: 2000
    },
]

import Product from '../models/product.js';
import Category from '../models/category.js';

//[GET]: product
export function index(req,res){
    Product.find().populate('categoryId')
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