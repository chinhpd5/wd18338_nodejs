import  express from 'express'
import {signin,GetList,signup,Update,Remove,getById} from '../controllers/UserController.js'
import checkAuth from '../middleware/Auth.js';
var router = express.Router()


// Lấy danh sách user
router.get('/',checkAuth, GetList);
// // Đăng kí
router.post('/signup', signup);
// Đăng nhập
router.post('/signin', signin);
// // lấy user theo id
router.get('/:id',checkAuth, getById)
// // update user
router.put('/:id', checkAuth,Update)
// // xóa user
router.delete('/:id',checkAuth, Remove)

export default router;