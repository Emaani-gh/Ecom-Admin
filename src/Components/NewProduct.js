import React, { useContext,useState } from 'react'
import { Context } from './Context/Context'
import { useNavigate} from 'react-router-dom'

const NewProduct = () => {
    const [data,setData] = useState({})
    const {categData} = useContext(Context)
    let navigate = useNavigate()

    const {actions} = useContext(Context)


    const handleChange = (e)=>{
        setData(prev=>{
            return{
            ...prev,
            [e.target.name]:e.target.value,
            };
        })
    }

    const handleFile = (e)=>{
        setData(prev=>{
            return{
                ...prev,[e.target.name]:e.target.files ? e.target.files[0] : null
            }
        })
    }
    
    const handleSubmit = ()=>{
        const form = new FormData()

        for(const key in data) {
            form.append(key, data[key]);
          }
        
        fetch('http://localhost:5000/api/products',{
            method:"POST",
            body:form
        })
        .then(res=>setData(prev=>{
            return{
                ...prev,['status'] : res.status
            }
        }))
        .then(()=>{
            actions.fetchProducts();
            navigate('/products')
        })
    }
    

  return (
    <div className='main'>
        <div className='main-header'>
          <h3>Products / Add</h3>
    </div>

    <div className='container frm py-4'>
        <div>
            <input type="name" className="form-control" id="pName" placeholder="Enter Product Name" name='productName' value={data.name} onChange={handleChange}/>
        </div>
        
        <div>
            <input type="name" className="form-control" id="price" placeholder="Enter product Price" name='productPrice' value={data.name} onChange={handleChange} />
        </div>   

        <div className='select'>
            
            <select className="form-select" aria-label="Default select example" name='categId' onChange={handleChange} >
                <option >Select Category</option> 
                {
                    categData.map(categ=>( 
                        <option key={categ.categoryId} value={categ.categoryId} > {categ.categoryName}</option>
                    ))
                }
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" name='image' onChange={handleFile} />
        </div> 
          
          <button className='text-light p-2' onClick={handleSubmit} >Submit</button>

      </div>
        
        
    </div>
  )
}

export default NewProduct
