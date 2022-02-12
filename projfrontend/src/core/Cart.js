import React, {useState, useEffect} from 'react'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/cartHelper'


const Cart = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(loadCart())
  }, [])

  const loadAllProducts = (products) => {
    return(
      <div>
        {products.map((product, index) => (
          <Card
          key={index}
          product={product}
          removeFromCart={true}
          addtoCart={false}
          />
        ))}
      </div>
    )
  }

  const loadCheckout = () => {
    return(
      <div>
        <h1>
          Checkout
        </h1>
      </div>
    )
  }

  return (
    <Base title='Cart Page' description='Welcome to Checkout'>
        <div className='row text-center'>
          <div className='col-6'>
            {loadAllProducts(products)}
          </div>
          <div className='col-6'>
            {loadCheckout()}
          </div>
        </div>
    </Base>
  )
}

export default Cart