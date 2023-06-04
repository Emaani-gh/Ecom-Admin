import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { Context } from './Context/Context'


const CategoryLayout = () => {
    const {categData} = useContext(Context)
  return (
    
    <div className='main'>
        <div className='main-header'>
            <h3>Categories</h3>
            <div className='header-btn'>
                <Link to={'/category/add'} className='btn-add'>Add</Link>
                <Link className='btn-search'>search</Link>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th> Name</th>
                    <th>Status</th>
                    <th>Option</th>
                </tr>
            </thead> 

            <tbody>
                {
                    categData.map((category,index)=>{
                        return(
                        <tr key={category.categoryId}>
                            <td >{index+1}</td>
                            <td>{category.categoryName}</td>
                            <td>{category.isActive?'active':'inactive'}</td>
                            <td className='tr-edit-btn'>
                                <button className='edit'>Edit</button>
                            </td>
                            <td className='tr-del-btn'>
                                <button>Del</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default CategoryLayout