# nodejs_wd18339

## Buổi 1 Tạo Node Server
- Tải và cài đặt Nodejs: https://nodejs.org/en
- Tạo dự án `npm init -y`
- Cài đặt thư viện express `npm i express`
Documet: https://expressjs.com/
- Tạo file index.js bên trong thư mục src
- Copy nội dung
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
- Cài đặt node-mon: `npm i nodemon --save-dev`
Document: https://www.npmjs.com/package//nodemon
- Trong file package.json tại key "script" `THÊM` nội dung
```
 "scripts": {
    ... 
    "start": "nodemon src/index.js"
  },
```
- Chạy server sử dụng lệch `npm start`


## Buổi 2

- Cài đặt express-handlebars `npm i express-handlebars`
Document: https://www.npmjs.com/package/express-handlebars
- Tạo cấu trúc thư mục bên trong thư mục src
```
src
├── index.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

```
- Thêm vào trong 'src/index.js'
```
...
const { engine } = require('express-handlebars');
const path = require('path');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

...
```
- Sử dụng hàm `res.render('tên view')` để hiển thị giao diện
- Thêm nội dung vào trong các file
+ `src/views/layouts/main.handlebars`
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>WD18339</title>
</head>
<body>
    <div>Header</div>
        {{{body}}}
    <div>Footer</div>
</body>
</html>
```
+ `src/views/home.handlebars`
```
<h1>WD18338</h1>
```
- Thay đổi đuôi file `.hanlebars` thành `hbs`
- Sửa nội dung trong `src/index.js`
```
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
```
## Buổi 3
- Router
- Controller

## Buổi 4
- npm i mongoose
- thêm thư viện vào app.js `import mongoose from 'mongoose';`
- connect CSDL trong app.js
```
mongoose.connect('mongodb://127.0.0.1:27017/WD18338')
  .then(() => console.log('Connected!'));
```
## Buổi 5,6
- Model
- CRUD với mongoose

## Buổi 7
- Làm BT

## Buổi 8
- 

### Validate với mongoose:

- Chung:
+ required : boolean 
+ default : any
+ validate: function
+ unique: boolean

- String:
+ lowercase: boolean
+ uppercase: boolean
+ trim: boolean
+ minLength: number
+ maxLength: number

- Number:
+ min: number
+ max: number



