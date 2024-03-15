import  express from 'express'
import {index,addProduct,getById,update,remove} from '../controllers/ProductController.js'
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
router.get('/:id', getById)
// update sản phẩm
router.put('/:id', update)
// xóa sản phẩm
router.delete('/:id', remove)

export default router;