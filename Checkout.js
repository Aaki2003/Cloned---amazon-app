import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckOutProduct from './CheckOutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <div>
          <h2 className='checkout_title'>Your Shopping basket</h2>
          {/*Basket Item */}
          {basket.map(item => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />))}
          {/*Basket Item */}
          {/*Basket Item */}
          {/*Basket Item */}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />

      </div>
    </div>
  )
}

export default Checkout