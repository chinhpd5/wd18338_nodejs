// thêm thư viện
import express from 'express';
import {engine} from 'express-handlebars'
import path, { dirname } from 'path';

import { fileURLToPath} from 'url';

import router from './routers/index.js';

// const express = require('express')
// const {engine} = require('express-handlebars')
// const path = require('path');

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

router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//cài view

//b1: tạo thư mục src và đưa index.js vào

//b2: sửa  "start": "nodemon src/index.js"

//b3: cài đặt handlebar express

//npm i express-handlebars

//tạo cấu trúc thư mục