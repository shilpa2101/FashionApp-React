import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
  const [data,changedata]=useState(
    {
      "name":""
    }
  )
  const inputHeader=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    console.log(data)
  }
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Product Name</label>
                  <input type="text" className="form-control"  name='name' value={data.name} onChange={inputHeader}/>
                  <button className="btn btn-primary" onClick={readValue}>Delete</button>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Delete