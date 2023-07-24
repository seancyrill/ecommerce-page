import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from "../../data/items.json"
import { promoCal } from '../utilities/PromoCal'
import { formatCurrency } from '../utilities/CurrencyFormater'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Cart() {
  const { cartItem, setCartItem, deleteItem, showCart, setShowCart } = useShoppingCart()
  const checkOutMsg = useRef<HTMLDialogElement>(null)
  
  return ( 
  <div className={`flex flex-col absolute top-20 right-0 bg-White max-h-[600px] max-w-md w-[96%] mr-2 rounded-xl shadow-2xl ${showCart ? 'translate-y-0' : '-translate-y-[200%]'} transition ease-in-out duration-300`}>
    <div className=' flex justify-between p-2 w-full border-b-[1px] border-b-Grayish-blue'>
      <h1 className='p-2' >Cart</h1>
      {cartItem.length > 1 && <p className='font-bold bg-Pale-orange text-Orange p-2 rounded-md '>{`Total: 
        ${formatCurrency(cartItem.reduce((total, item) => {
        const itemData = storeItems.find(itemData => itemData.id === item.id)!
        const itemCurrPrice = itemData.price * (1- itemData.promo/100)
        return total + (item.quantity * itemCurrPrice)
        }, 0))}`
      }</p>}
    </div>

    <div className='flex-grow overflow-auto p-4'>
      {cartItem.length === 0 && <p className='grid place-content-center m-4 font-bold text-Dark-grayish-blue'>Your cart is empty.</p>}
      {cartItem.map(item => {
        const itemData = storeItems.find(({ id }) => id === item.id)!
        return (<div  key={item.id} className='relative grid grid-cols-[3rem_1fr_1fr] gap-x-4 mb-4'>
            <img src={itemData.images.thumbnail[0]} alt="itemImage" className='h-full object-contain row-span-2' />
            <p onClick={() => setShowCart(false)} className='col-start-2 col-end-4 hover:opacity-50'><Link to={`/item/${item.id}`}>{itemData.name}</Link></p>
            <p>{`${item.quantity} x `} <span className='font-bold'>{formatCurrency(item.quantity*promoCal(itemData.price, itemData.promo))}</span></p>
            <img onClick={() => deleteItem(item.id)} src="/images/icon-delete.svg" alt="deleteBtn" className='absolute bottom-0 right-0 pl-4 cursor-pointer hover:scale-125' />
        </div>)
      })}
      {cartItem.length > 0 && <button onClick={() => (setCartItem([]), setShowCart(false), checkOutMsg.current?.showModal())} className='w-full bg-Orange hover:bg-Orange/50 text-White font-bold rounded-lg p-4' >Checkout</button>}
    </div>

    <dialog ref={checkOutMsg} onClick={() => checkOutMsg.current?.close()} className='p-16 rounded-lg'>
      <p className='text-Orange mb-4'>Thank you for shopping!</p>
      <Link to={'/'} ><img src="/images/logo.svg" alt="logo" className='m-auto'/></Link>
    </dialog>
  </div>
  )
}
