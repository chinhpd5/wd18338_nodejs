// thêm thư viện
import express from 'express';
import {engine} from 'express-handlebars'
import path, { dirname } from 'path';
import { fileURLToPath} from 'url';
import mongoose from 'mongoose';


//connect Database
//WD18338 là tên cơ sở dữ liệu
mongoose.connect('mongodb://127.0.0.1:27017/WD18338')
  .then(() => console.log('Connected!'));

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
import productRouter from './routers/product.js'
import categoryRouter from './routers/category.js'

app.use('/product',productRouter);
app.use('/category',categoryRouter);
    

//Trang chủ
app.get('/', (req, res) => {
    res.render('home');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})