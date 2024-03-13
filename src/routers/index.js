// nhận router từ routers/product.js
import productRouter from './product.js'
// nhận router từ routers/categpry.js
import categoryRouter from './category.js'


function router(app) {
    //product
    app.use('/product',productRouter);
    app.use('/category',categoryRouter);
    

    //Trang chủ
    app.get('/', (req, res) => {
        res.render('home');
    })
    
}

export default router;