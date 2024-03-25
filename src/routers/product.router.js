import  express from 'express'
import {index,addProduct,getById,update,remove} from '../controllers/ProductController.js'
import checkAuth from '../middleware/Auth.js';
var router = express.Router()


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