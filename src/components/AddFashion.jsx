import React, { useState } from 'react'
import Navbar from './Navbar'

const AddFashion = () => {
    const [data,changefashion]=useState(
        {
            "name":"",
            "pid":"",
            "des":"",
            "supname":""
        }
    )
    const inputHandler=(event)=>{
        changefashion({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div class="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ProductId</label>
                            <input type="text" className="form-control" name='pid' value={data.pid} onChange={inputHandler} />
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='des' value={data.des} onChange={inputHandler} />
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Supplier name</label>
                            <input type="text" className="form-control" name='supname' value={data.supname} onChange={inputHandler} />
                        </div><br></br>
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFashion
