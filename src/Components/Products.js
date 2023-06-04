import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context/Context'

const Products = () => {
    const {productData} = useContext(Context)
    
  return (
    <div className='main'>
    <div className='main-header'>
            <h3>Products</h3>
            <div className='header-btn'>
                <Link to={'/products/add'} className='btn-add'>Add</Link>
                <Link className='btn-search'>search</Link>
            </div>
        </div>

    <div >
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>PrdID</th>
                    <th> Name</th>
                    <th>category</th>
                    <th>Status</th>
                    <th>Option</th>
                </tr>
            </thead>

            <tbody>
                {
                    productData.map((product,index)=>{
                        return(
                            <tr key={product.productId}>
                                <td>{index+1}</td>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>FootWear</td>
                                <td>available</td>
                                <td className='tr-edit-btn'>
                                    <Link to = {`/products/${product.productId}`} className='edit'>View</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Products