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

//[GET]: product
export function index(req,res){
    Product.find()
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
    let pro = req.body;
    if (pro) {
        products.push(pro)
        res.send(products)
    }
    else
        res.send("Có lỗi")
}

export function getById(req,res){
    const id = req.params.id;
    if(id){
        Product.findById(id)
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

//[GET]: prduct/:id