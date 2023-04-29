import React from 'react'
import products from '../data/clothes.json'
import {BsTrash} from 'react-icons/bs'
import formatCurrency from './formatCurrency'
import {useShoppingcart} from '../context/shoppingCart'

const CartItem = (item) => {

    const {removeItemFromCart,getItemsQuantity} = useShoppingcart();
    const quantity = getItemsQuantity(item.item.id);

    const product  = products.find((i) => i.id === item.item.id);

    if(product === null) return null;

    console.log(product);

    return (
        <div className='flex justify-between border-t-[1px] border-black gap-4 p-2 py-4'>

            <div className='flex items-start gap-4'>
                <img className='rounded-md h-[80px]' src={product.img} alt="" />

                <div className='font-semibold flex flex-col gap-[1px]'>
                    <span>{product.name}</span>
                    <span className='text-[12px]'>
                        {formatCurrency(product.price)}
                        {quantity > 1 && (<span className='text-[12px] font-normal'> x{quantity}</span>)}       
                    </span>
                    <h1 className='text-xl text-red-500'>
                        {formatCurrency(product.price * quantity)}
                    </h1>
                </div>

            </div>
            
            <div 
            className='cursor-pointer text-red-500 pt-4'
            onClick={()=>removeItemFromCart(product.id)}
            >
                <BsTrash size={17}/>
            </div>
        </div>
  )
}

export default CartItem