const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

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
  res.send('Hello World!')
})
// Lấy danh sách sản phẩm
app.get('/product',(req,res)=>{
    // console.log(req.query);
    res.send(products)
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
app.put('/produc/:id',(req,res)=>{
  //code
})
// xóa sản phẩm
app.delete('/produc/:id',(req,res)=>{
  //code
})




app.get('/category',(req,res)=>{
  res.send("category")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})