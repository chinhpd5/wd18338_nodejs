import  express from 'express'
import { upload } from '../middleware/upload.js';
import { UploadDB} from '../controllers/CommonController.js'
var router = express.Router()


// Lấy danh sách sản phẩm
router.post('/upload',upload.single("image"),UploadDB);

export default router;