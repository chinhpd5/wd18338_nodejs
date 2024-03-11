import productRouter from './product.js'


function router(app) {
    app.use('/product',productRouter);



    //Trang chủ
    app.get('/', (req, res) => {
        res.render('home');
    })
    app.get('/category', (req, res) => {
        res.send("category")
    })

}

export default router;