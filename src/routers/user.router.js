import  express from 'express'
import {signin,GetList,signup,Update,Remove,getById} from '../controllers/UserController.js'
var router = express.Router()


// Lấy danh sách user
router.get('/', GetList);
// // Đăng kí
router.post('/signup', signup);
// Đăng nhập
router.post('/signin', signin);
// // lấy user theo id
router.get('/:id', getById)
// // update user
router.put('/:id', Update)
// // xóa user
router.delete('/:id', Remove)

export default router;