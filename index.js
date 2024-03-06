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



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/product',(req,res)=>{
    // console.log(req.query);
    res.send(products)
})


app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send("Nhận thành công")
})

app.get('/product/:id',(req,res)=>{
  console.log(req.params.id);
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


app.get('/category',(req,res)=>{
  res.send("category")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})