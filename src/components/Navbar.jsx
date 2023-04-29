import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useShoppingcart} from '../context/shoppingCart'
import StoreItems from './StoreItems'


const Navbar = () => {

    const {setIsOpen,isOpen} = useShoppingcart();

    const {cartQuantity} = useShoppingcart();


    return (
        <div className='border-b-[1px] border-black w-full'>
            <div className='w-full flex items-center justify-between max-w-[1200px] px-10 py-6 mx-auto'>
                <h1 className='text-4xl font-bold'>XOCO</h1>
                
                <div className='relative'>
                    <div className='cursor-pointer p-2 rounded-full bg-gray-50' onClick={()=>setIsOpen(!isOpen)}
                    >
                        <AiOutlineShoppingCart size={24}/>
                        
                        {cartQuantity > 0 && (
                            <span className='absolute bg-red-500 py-[1px] px-[6px] rounded-full text-[10px] font-semibold text-white top-0 right-0'>
                                {cartQuantity}
                            </span>
                        )}
                        
                    </div>
                    {isOpen && (<div className='absolute right-0 top-full mt-4'>
                        <StoreItems/>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Navbar