import  express from 'express'
import {index,addProduct} from '../controllers/ProductController.js'
var router = express.Router()

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

// Lấy danh sách sản phẩm
router.get('/', index);
// Thêm sản phẩm
router.post('/', addProduct);

// lấy sản phẩm theo id
router.get('/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    if (id > 0) {
        const product = products.find(item => item.id == id)
        if (product)
            res.send(product)
        else
            res.send("Không tìm thấy sản phẩm")
    } else {
        res.send("Không tìm thấy sản phẩm")
    }
})
// update sản phẩm
router.put('/:id', (req, res) => {
    //b1: lấy id
    let id = req.params.id;
    //b2 : lấy data
    let data = req.body;
    if (id) {
        //b3 tìm vị trí của id đó
        const index = products.findIndex(item => item.id == id);
        if (index < 0)
            res.send('Không tìm thấy sản phẩm')
        else {
            console.log(data);
            console.log(Boolean(data));
            // if(data){
            //   console.log(data == {});
            // }
            if (data) {
                // products[index] = data;
                res.send(products);
            } else
                res.send("Không nhận được dữ liệu gửi")
        }
    } else {
        res.send("Không tìm thấy sản phẩm")
    }
    //code
})
// xóa sản phẩm
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const index = products.findIndex(item => item.id == id);

    if (index >= 0) {
        products.splice(index, 1);
        res.send(products)
    }

})

export default router;