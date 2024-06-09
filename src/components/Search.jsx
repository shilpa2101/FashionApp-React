import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
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
        <row>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Search</label>
            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHeader} />
            <button className="btn btn-primary" onClick={readValue}> Search</button>
          </div>
        </row>
      </div>
    </div>
  )
}

export default Search