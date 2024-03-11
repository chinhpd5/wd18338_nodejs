const products = [
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

export function index(req,res){
    res.render("product", { data: products })
}

export function addProduct(req, res){
    let pro = req.body;
    if (pro) {
        products.push(pro)
        res.send(products)
    }
    else
        res.send("Có lỗi")
}