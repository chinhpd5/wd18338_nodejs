const express = require('express')
// thêm thư viện
const {engine} = require('express-handlebars')
const path = require('path');

const app = express()
const port = 3000

app.use(express.json());

//views
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));


const products =[
  {
    id: 1,
    name: "product 1",
    price: 2000
  },
  {
    id: 2,
    name: "product 2",
    price: 2000
  },
  {
    id: 3,
    name: "product 3",
    price: 2000
  },
  {
    id: 4,
    name: "product 4",
    price: 2000
  },
]


//Trang chủ
app.get('/', (req, res) => {
  res.render('home');
})

// Lấy danh sách sản phẩm
app.get('/product',(req,res)=>{
    // console.log(req.query);
    // res.send(products)
    res.render("product")
})

// lấy sản phẩm theo id
app.get('/product/:id',(req,res)=>{
  // console.log(req.params.id);
  const id = req.params.id;
  if(id >0){
    const product = products.find(item=> item.id==id)
    if(product)
      res.send(product)
    else
      res.send("Không tìm thấy sản phẩm")
  }else{
    res.send("Không tìm thấy sản phẩm")
  }
})


app.post('/product',(req,res)=>{
    // console.log(req.body);
    let pro = req.body;
    if(pro){
      products.push(pro)
      res.send(products)
    }
    else
      res.send("Có lỗi")
})


// update sản phẩm
app.put('/product/:id',(req,res)=>{
  //b1: lấy id
  let id = req.params.id;
  //b2 : lấy data
  let data = req.body;
  if(id){
    //b3 tìm vị trí của id đó
    const index = products.findIndex(item=> item.id == id);
    if(index < 0)
      res.send('Không tìm thấy sản phẩm')
    else{
      if(data != {}){
        products[index] = data;
        res.send(products);
      } else
        res.send("Không nhận được dữ liệu gửi")
    }
  }else{
    res.send("Không tìm thấy sản phẩm")
  }
  //code
})


// xóa sản phẩm
app.delete('/product/:id',(req,res)=>{
    const id = req.params.id;
    
    const index = products.findIndex(item=> item.id == id);

    if(index >= 0){
      products.splice(index,1);
      res.send(products)
    }
  
})




app.get('/category',(req,res)=>{
  res.send("category")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//cài view

//b1: tạo thư mục src và đưa index.js vào

//b2: sửa  "start": "nodemon src/index.js"

//b3: cài đặt handlebar express

//npm i express-handlebars

//tạo cấu trúc thư mục