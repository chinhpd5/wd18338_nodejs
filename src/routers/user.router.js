import  express from 'express'
import {GetList,Add} from '../controllers/UserController.js'
var router = express.Router()


// Lấy danh sách user
router.get('/', GetList);
// // Thêm user
router.post('/', Add);
// // lấy user theo id
// router.get('/:id', getById)
// // update user
// router.put('/:id', update)
// // xóa user
// router.delete('/:id', remove)

export default router;