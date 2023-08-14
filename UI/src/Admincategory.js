import { useContext, useEffect, useState } from "react";
import Left from "./Left";
import { Contextapi } from "./Contextapi";
import { useNavigate } from "react-router-dom";

function Admincategory() {
  const{loginname}=useContext(Contextapi)
  const [category,setCategory]=useState('')
  const [message,setMessage]=useState('')
  const [cat,setCat]=useState([])
  const navigate=useNavigate()
  
if(!loginname){
    navigate('/')
}
  function handleform(e){
    e.preventDefault()
    const data={category}
    fetch('/api/categoryadd',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then((result)=>{return result.json()}).then((data)=>{
        if(data.status===201){
          setMessage(data.message)
        }else{
            setMessage(data.message)
        }
    })
  }

  useEffect(()=>{
    fetch('/api/allcategort').then((result)=>{return result.json()}).then((data)=>{
         if(data.status===200){
             setCat(data.apidata)
         }else{
            setMessage(data.message)
         }
    })
  },[])

    return ( 
          
        <section id="cat">
        <div className="container">
        <div className="row">
        <Left/>
        <div className="col-md-9">
            {message}
            <form onSubmit={(e)=>{handleform(e)}}>
                <label className="form-label"> Add New Movie Category</label>
                <input type="text"
                className="form-control"
                 value={category}
                 onChange={(e)=>{setCategory(e.target.value)}}
                />
                <button type="submit" className="form-control btn btn-warning mt-2">Add</button>
            </form>
                 <h2 className="mt-5 text-center">All Category Name's</h2>
            <table className="table table-bordered border-primary col-md-4 mx-auto">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {cat.map((result,key)=>(
                <tr key={result._id}>
                  <td>{key+1}</td>
                  <td>{result.categoryName}</td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
        </div>
        </div>
         
   

    </section>
 
       
      
     );
}

export default Admincategory;