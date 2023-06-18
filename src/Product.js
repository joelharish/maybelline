import React from 'react'

const Product = ({product}) => {

  const blank = "_blank"

  return (
    <div className='movie'>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <img src={product.image_link} />
      </div>
      <div>
        <span>{product.name}</span><br/>
        <span>Ratings : {product.rating}</span>
        <h3>${product.price}</h3>
        <span><a href={product.product_link} target={blank}>Product Link</a></span>
      </div>
    </div>
  )
}

export default Product