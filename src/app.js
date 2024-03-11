// thêm thư viện
import express from 'express';
import {engine} from 'express-handlebars'
import path, { dirname } from 'path';
import { fileURLToPath} from 'url';

// thêm thư viện từ thư mục routers
import router from './routers/index.js';

const app = express()
const port = 3000

app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__dirname);

//views
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/views'));

//loại bỏ toàn bộ đường dẫn
//gọi hàm router trong thư mục routers/index.js
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})