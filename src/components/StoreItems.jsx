import React from 'react'
import {useShoppingcart} from '../context/shoppingCart'
import CartItem from './CartItem';
import product from '../data/clothes.json';
import formatCurrency from '../components/formatCurrency';

const StoreItems = () => {

    const {cartItems,cartQuantity} = useShoppingcart();

    return (
    <div className='w-[400px] bg-white border-[1px] py-6 px-5 rounded-md shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>
            Checkout Goods <span className='text-gray-500'>({cartQuantity})</span>
        </h1>
        {cartItems.length > 0 ? (
            <div className='flex flex-col border-b-[1px] border-black'>
                {
                    cartItems.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
        ) : 
        (
            <div className='py-6'>
                <h1 className='text-xl text-center text-gray-600'>
                    Your cart is currently empty.
                </h1>
            </div>
        )}

        {cartItems.length > 0 && (
            <div className='mt-4 font-bold flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Subtotal:</h1>
                <h1 className='text-2xl text-red-500'>
                    {
                        formatCurrency(
                            cartItems.reduce((total,cartItem)=>{
                                const item = product.find((i) => i.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            },0)
                        )
                    }
                </h1>
            </div>
        )
        }

        {cartItems.length > 0 && (
        <div className='mt-6 w-full bg-black text-white text-center py-3 rounded-lg cursor-pointer font-semibold'>
            Checkout
        </div>  
        )

        }
        
    </div>
  )
}

export default StoreItems