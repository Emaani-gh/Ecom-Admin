import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from './Context/Context'

export const ViewDetails = () => {
    const {productData} = useContext(Context) 
    let {id} = useParams()
    let product = productData.find(ele=>ele.productId = id)
    
    useEffect(()=>{
      console.log(product.imageUrl)
    })

  return (
    <div>
        <img src={product.imageUrl}/>
    </div>
  )
}
