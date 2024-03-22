import  express from 'express'
import {GetList,signup,Update,Remove,getById} from '../controllers/UserController.js'
var router = express.Router()


// Lấy danh sách user
router.get('/', GetList);
// // Thêm user
router.post('/signup', signup);
// // lấy user theo id
router.get('/:id', getById)
// // update user
router.put('/:id', Update)
// // xóa user
router.delete('/:id', Remove)

export default router;