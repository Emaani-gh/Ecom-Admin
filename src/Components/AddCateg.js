import React, { useState } from 'react'

export const AddCateg = () => {
  const [data,setData] = useState({});

  const handleChange = (e)=>{
    setData(prev=>{
      return {...prev, [e.target.name] : e.target.value}
    })
  }


  const handleSubmit = ()=>{
    fetch("http://localhost:5000/api/category", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
    name:data.cat_name,
    status:data.isActive
  })
})

  }



  return (
    <div className='main'>
        <div className='main-header'>
          <h3>Categories / Add</h3>
        </div>

      <div className='container frm py-4'>
        <div>
            {/* <label for="Name" class="form-label">Email address</label> */}
            <input type="name" className="form-control" id="Name" placeholder="Enter category Name" name='cat_name' value={data.name} onChange={handleChange}/>
          </div>

          <div className='select'>
            <select className="form-select" aria-label="Default select example"  name='isActive' value={data.name} onChange={handleChange}>
              <option defaultValue={0}>Select status</option>
              <option value={true}>Active</option>
              <option value={false}>inactive</option>
            </select>
          </div>
          <button className='text-light p-2 ' onClick={handleSubmit}>Submit</button>

      </div>
        
        
    </div>
  )
}
