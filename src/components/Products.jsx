import React, { useState , useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'
import products from '../data/clothes.json'
import ProductItem from './ProductItem'
import {motion , AnimatePresence} from 'framer-motion';


const Products = () => {

  const [productItems , setProductItems] = useState([]);
  
  const [filter,setFilter] = useState("all");

  const [search,setSearch] = useState("");

  useEffect(()=>{

    if(search === ""){
      setProductItems(products);
    }
    else{
      const productSearch = products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
      return setProductItems(productSearch);
    }

    if(filter === "all") return setProductItems(products);

    if(filter === "Men" || filter === "Woman"){
      const filtered = products.filter((item) => item.category === filter);
      setProductItems(filtered);
    }


  },[filter,search]);
  
  return (
    <div className='w-full' name="product">
        <div className='w-full max-w-[1200px] px-10 py-14 mx-auto'>
            
            <div className='flex flex-col items-center gap-6'>
                <h1 className='font-bold text-5xl'>Products</h1>
                <p className='text-gray-600 text-lg text-center'>Search for the latest articles and find amazing products to buy from our huge collection</p>
                <div className='flex items-center bg-gray-100 px-7 py-4 gap-4 w-[400px] max-w-full rounded-md'>
                    <FiSearch size={20} className='text-gray-400'/>
                    <input type="text" className='outline-0 bg-transparent' placeholder='Search products'
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div>
              <div className='flex items-center justify-center mt-10'>
                <div className='flex items-center sm:gap-8 gap-4 max-w-[100vw]'>
                  <button onClick={()=> setFilter("all")}
                    className={filter ==="all" ? 'border-2 border-black px-4 py-1 bg-black text-white font-semibold rounded-xl' : 
                    'border-2 border-gray-100 px-4 py-1 rounded-xl text-gray-500 font-semibold'}>
                    All
                  </button>
                  <button onClick={()=> setFilter("Men")}
                    className={filter ==="Men" ? 'border-2 border-black px-4 py-1 bg-black text-white font-semibold rounded-xl' :
                    'border-2 border-gray-100 px-4 py-1 rounded-xl text-gray-500 font-semibold'}>
                    Men
                  </button>
                  <button onClick={()=> setFilter("Woman")}
                    className={filter ==="Woman" ? 'border-2 border-black px-4 py-1 bg-black text-white font-semibold rounded-xl' : 
                    'border-2 border-gray-100 px-4 py-1 rounded-xl text-gray-500 font-semibold'}>
                    Woman
                  </button>
                </div>
              </div>

              {productItems.length > 0 ? (
                <motion.div layout className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                  <AnimatePresence>
                    {
                      productItems.map((product)=>(
                        <ProductItem key={product.id} product={product}/>
                      ))
                    }
                  </AnimatePresence>
                </motion.div>
              ) :(
                <div className='py-12 text-center'>
                  Not Found
                </div>
              )
              }
            </div>
        </div>
    </div>
  )
}

export default Products