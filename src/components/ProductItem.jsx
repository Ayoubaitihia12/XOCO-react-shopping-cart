import React from 'react'
import {useShoppingcart} from '../context/shoppingCart'
import formatCurrency from './formatCurrency'
import {motion} from 'framer-motion';

const ProductItem = ({product}) => {

    const {getItemsQuantity,increaseCartQuantity} = useShoppingcart();
    const quantity = getItemsQuantity(product.id);

    return (
    <motion.div 
        layout
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className='mt-6'>

        <img src={product.img} className='cursor-pointer rounded-xl shadow-sm' alt={product.name} />

        <div className='flex flex-col items-start gap-3 mt-2'>
            <div className='w-full flex items-start justify-between gap-4 font-semibold'>
                <h1>{product.name}</h1>
                <span>{formatCurrency(product.price)}</span>
            </div>
            <button
            onClick={()=>increaseCartQuantity(product.id)}
            className='border-2 border-black text-sm rounded-full px-6 py-1 font-semibold hover:bg-black hover:text-white duration-300'
            >
                Add To cart {quantity>0 && "(" + (quantity) + ")"}
            </button>
        </div>

    </motion.div>
  )
}

export default ProductItem