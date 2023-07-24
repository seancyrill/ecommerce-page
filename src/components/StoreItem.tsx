import { Link } from 'react-router-dom';
import { formatCurrency } from '../utilities/CurrencyFormater';
import discountAndFormat from '../utilities/DiscountAndFormat';

type StoreItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  promo: number;
  images: {
      full: string[];
      thumbnail: string[];
  };
}

const StoreItem = ({ id, name, price, promo, images }: StoreItemProps) => {
  return (<>
    <Link to={`/item/${id}`}>
      <article className='group bg-White shadow-md rounded-lg overflow-hidden hover:opacity-90 hover:scale-105 transition ease-in duration-100'>
        <img src={images.full[0]} alt="product image" className="h-52 w-full object-cover" />
        <div className="p-4">
          <h1 className='text-xl mb-2 group-hover:text-Orange h-14'>{name}</h1>
          <div className="flex justify-between items-center">
              {promo > 0 && <>
                <div className='flex items-center gap-2'>
                  <h3 className='font-bold text-xl'>{discountAndFormat(price, promo)}</h3>
                  <p className='p-1 rounded-lg bg-Pale-orange text-sm text-Orange'>{`${promo}%`}</p>
                </div>
                <h4 className='text-Grayish-blue line-through'>{formatCurrency(price)}</h4>
              </> }
              </div>
              {promo === 0 &&
                <h4 className='font-bold text-xl'>{formatCurrency(price)}</h4>
              }
        </div>
      </article>
    </Link>
  </>)
}

export default StoreItem