import {useContext,createContext,useState,useEffect} from 'react'

const ShoppingCartContext = createContext({});

const initialCartItmes = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : [];

const ShoppingCartProvider = ({children}) => {

    const [cartItems,setCartItems] = useState(initialCartItmes);

    useEffect(()=>{
        localStorage.setItem("shopping-cart",JSON.stringify(cartItems))
    },[cartItems])

    const [isOpen,setIsOpen] = useState(false);

    const cartQuantity = cartItems.reduce(
        (quantity,item) => quantity + item.quantity,
    0);

    const getItemsQuantity = (id) =>{
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    const increaseCartQuantity = (id)=>{
        setCartItems((currItems)=>{
            if(currItems.find((item)=>item.id === id) == null){
                return [...currItems,{id,quantity:1}];
            }else{
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item,quantity:item.quantity + 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id)=>{
        setCartItems((currItems)=>{
            if(currItems.find((item)=>item.id === id) == null){
                return currItems.filter((item)=>item.id !== id);
            }else{
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item,quantity:item.quantity - 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    const removeItemFromCart = (id)=>{
        return setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                getItemsQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeItemFromCart,
                setIsOpen,
                isOpen,
                cartQuantity,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;

export const useShoppingcart = ()=>{
    return useContext(ShoppingCartContext);
}