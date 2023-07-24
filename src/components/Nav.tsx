import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import cartLogo from '/images/icon-cart.svg'
import Cart from './Cart'
import { useState } from 'react'

const Nav = () => {
  const { cartItem, setShowCart } = useShoppingCart()
  const [showMenu, setShowMenu] = useState(false)
  const cartCount = cartItem.reduce((total, item) => item.quantity + total, 0)

  return ( <>
    <aside className={`absolute top-0 h-full w-full sm:hidden z-20 ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition ease-in-out duration-300 `}>
      <div className={`absolute h-full w-2/3 bg-White ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition ease-in-out duration-300`}>
        <ul onClick={() => setShowMenu(false)} className='m-4'>
          <li className='cursor-pointer p-4 mb-8 hover:opacity-75'><img src="/images/icon-close.svg" alt="closeMenu" /></li>
          <Link to={'/'}><li className='popupMenuItem hover:text-Orange'>Collections</li></Link>
          <Link to={'/about'}><li className='popupMenuItem hover:text-Orange'>About</li></Link>
          <Link to={'/contact'}><li className='popupMenuItem hover:text-Orange'>Contact</li></Link>
        </ul>
      </div>
      <div onClick={() => setShowMenu(false)} className={`bg-Black/75 h-full w-full ${showMenu ? 'opacity-100 block' : 'opacity-0 hidden' } transition ease-in-out duration-300`}></div>
    </aside>

    <nav className='relative top-0 bg-White flex justify-between items-center border-b-2 border-b-Light-grayish-blue z-10'>        
      <ul className='flex justify-between items-center'>
        <li onClick={() => setShowMenu(true)} className='sm:hidden px-4 py-6 ml-2 cursor-pointer'><img src="/images/icon-menu.svg" alt="" /></li>
        <Link to={'/'}><li className=''><img src="/images/logo.svg" alt="logo" className='px-2 py-6 mr-8 sm:py-8 min-h-6 navHover' /></li></Link>
        <Link to={'/about'} className='hidden sm:block'><li className='py-8 px-4 text-Dark-grayish-blue navHover'>About</li></Link>
        <Link to={'/contact'} className='hidden sm:block'><li className='py-8 px-4 text-Dark-grayish-blue navHover'>Contact</li></Link>
      </ul>
      <div className='flex justify-between items-center gap-4'>
        <div onClick={() => setShowCart(prev => !prev)} className="relative hover:scale-110 cursor-pointer px-2">
          <img src={cartLogo} alt="cart" className='h-5'/>
          {cartItem.length > 0 && 
            <p className='absolute top-0 right-0 text-xs translate-y-[-50%] translate-x-[25%] bg-Orange px-2 rounded-md text-White font-bold transition ease-in-out duration-300'>{cartCount}</p>
          }            
        </div>
        <img src="/images/image-avatar.png" alt="avatar" className='h-8 rounded-full hover:border-2 hover:border-Orange mr-4' />
      </div>
    <Cart />
    </nav>


  </>  )
}

export default Nav