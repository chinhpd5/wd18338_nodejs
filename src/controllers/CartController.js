
import Cart from '../models/order.model.js'

export function index(req,res){
    
}
//[POST] cart
export function addCart(req,res){
    const data = req.body;
    if(data){
        Cart.create(data)
            .then(resData=>res.status(201).json(resData))
            .catch(err=> res.status(500).json({message: err}))
    }else{
        res.status(400).json({message: "Thiếu dữ liệu"})
    }
}

//[GET] cart/user/:id
export async function getCartByUserId(req,res){
    const idUser = req.params.id;
    const cartUser = await Cart.findOne({userId: idUser})
        .populate('userId')
        .populate({
            path: 'items.productId',
            populate :{
                path: 'categoryId'
            }
        });
    // console.log(cartUser);
    res.status(200).json(cartUser);
}