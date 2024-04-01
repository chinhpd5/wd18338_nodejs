import  express from 'express'
import { upload,mutiUpload } from '../middleware/upload.js';
import { UploadDB,getImage} from '../controllers/CommonController.js'
var router = express.Router()


// Lấy danh sách sản phẩm
router.post('/upload',upload.single("image"),UploadDB);
router.post('/multiupload',mutiUpload.array("images"),()=>{});
router.get('/image',getImage);

export default router;