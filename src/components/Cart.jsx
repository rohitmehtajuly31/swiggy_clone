import React from 'react';
import { CDN_URL } from "../utils/constants";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from './cartSlice';



const Cart = () => {
  // Selecting cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch=useDispatch()

  const handleclearcart=()=>{
    dispatch(clearCart())
  }

  const removeitem=()=>{
    dispatch(removeItem())
  }


  return (
    <div>
        <h1>cart</h1>
        <button class="px-2 py-1 bg-blue-400 rounded-md" onClick={handleclearcart}>Clear Cart</button>
        <button class="px-2 py-1 bg-blue-400 rounded-md" onClick={removeitem}>remove Item</button>
       
      {cartItems.map((CartItem, index) => (
      
        <div className='mt-1 border-2 rounded-lg bg-stone-100 w-50 text-left' key={index}>
          <div className='flex flex-row justify-between items-center ml-2'>
            <div className='flex flex-col grid justify-items-start w-full max-w-40'>
              <h2 className='font-semibold'>{CartItem.card?.info?.name || 'Unnamed Item'}</h2>
              <h5 className='text-sm'>
                {truncateText(CartItem.card.info?.description, 40) || 'No description available'}
              </h5>
            </div>
            <div className='relative inline-block'>
              <img
                className='max-w-40 '
                src={CDN_URL + (CartItem.card.info?.imageId || 'default-image-id.jpg')}
                alt={CartItem.info?.name || 'Resource Image'}
              />
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

// Helper function to truncate text
const truncateText = (text, length) => {
  return text?.length > length ? text.substring(0, length) + '...' : text;
};

export default Cart;
