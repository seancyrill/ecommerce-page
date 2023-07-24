import { useState } from 'react'
import storeItems from "../../data/items.json";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../utilities/CurrencyFormater';
import { useShoppingCart } from '../context/ShoppingCartContext';
import discountAndFormat from '../utilities/DiscountAndFormat';
import ItemPhotos from '../components/ItemPhotos';


const ItemPage = ({  }) => {
  const [toCart, setToCart] = useState(1)
  const { id } = useParams();
  const item = storeItems.find(item => (item.id).toString() == id)!
  const { addToCart } = useShoppingCart()
  const [isAdded, setIsAdded] = useState(false)

  function addConfirm() {
    if(!isAdded) { 
    setIsAdded(true)
    addToCart(item.id, toCart)
    
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)}
  }

  return (
    <main className='mainPageWrap lg:flex lg:p-20 lg:gap-12'>
      <ItemPhotos images={item.images}/>
      <section className="m-4 lg:m-16">
        <h6 className='text-xs font-bold text-Orange tracking-widest'>SNEAKER COMPANY</h6>
        <h1 className='text-2xl font-bold my-4 lg:text-5xl'>{item.name}</h1>
        <p className='text-Dark-grayish-blue'>{item.description}</p>
        <div className="flex justify-between items-center my-4 lg:flex-col lg:items-start">
          {item.promo > 0 && <>
            <div className='flex gap-4'>
              <h3 className='font-bold text-3xl'>{discountAndFormat(item.price, item.promo)}</h3>
              <p className='p-2 rounded-lg bg-Pale-orange text-Orange font-bold'>{`${item.promo}%`}</p>
            </div>
            <h4 className='font-bold text-Grayish-blue text-xl line-through'>{formatCurrency(item.price)}</h4>
          </> }
          </div>
          {item.promo === 0 && 
            <h4 className='font-bold text-3xl'>{formatCurrency(item.price)}</h4>
          }
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:mt-8">
          <div className='flex w-full justify-between items-center bg-Light-grayish-blue rounded-xl'>
            <img onClick={() => setToCart(prev => prev !== 1 ? prev - 1 : prev)} src="/images/icon-minus.svg" alt="less1Item" className='object-contain p-6 cursor-pointer hover:opacity-50'/>
            <p className='font-bold'>{toCart}</p>
            <img onClick={() => setToCart(prev => prev + 1)} src="/images/icon-plus.svg" alt="add1Item" className='object-contain p-6 cursor-pointer hover:opacity-50'/>
          </div>
          <button onClick={() => addConfirm()} className={`relative w-full flex justify-center items-center p-6 rounded-lg gap-4 ${isAdded ? 'bg-green-700' : 'bg-Orange'}  hover:opacity-50`}>
            {isAdded && <p className='w-1/2 text-center text-green-600 absolute top-0 bg-Pale-orange rounded-md p-2 -translate-y-[120%]'>Added to cart. ✔ </p>}
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff"/></svg>
            <p className='text-White font-bold'>Add to Cart</p>
          </button>
        </div>
      </section>
    </main>
  )
}

export default ItemPage