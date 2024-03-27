// thêm thư viện
import express from 'express';
import {engine} from 'express-handlebars'
import path, { dirname } from 'path';
import { fileURLToPath} from 'url';
import mongoose from 'mongoose';
import 'dotenv/config'
import checkAuth from './middleware/Auth.js';


//connect Database
//WD18338 là tên cơ sở dữ liệu
mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log('Connected!'));

// thêm thư viện từ thư mục routers
// import router from './routers/index.js';

const app = express()
const port = process.env.PORT

app.use(express.json());



//views
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// app.engine('hbs', engine({extname: '.hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname,'/views'));

//loại bỏ toàn bộ đường dẫn
import productRouter from './routers/product.router.js'
import categoryRouter from './routers/category.router.js'
import userRouter from './routers/user.router.js'
import cartRouter from './routers/cart.router.js'

app.use('/product',checkAuth,productRouter);
app.use('/category',checkAuth,categoryRouter);
app.use('/cart',checkAuth,cartRouter);
app.use('/user',userRouter)
    

//Trang chủ
app.get('/', (req, res) => {
    res.render('home');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})