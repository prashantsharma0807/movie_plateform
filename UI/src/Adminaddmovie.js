import { useContext, useEffect, useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Adminaddmovie() {
   const{loginname}=useContext(Contextapi)

   const navigate=useNavigate()
   const [name,setName]= useState('')
   const [desc,setDesc]=useState('')
   const [year,setYear]=useState('')
   const [img,setImg]=useState('')
   const [message,setMessage]=useState('')
   const [cat,setCat]=useState('')
   const [category,setCategory]=useState([])
   

   if(!loginname){
    navigate('/')
   }

   function handleimage(e){
    setImg(e.target.files[0])
   }

   function handleform(e){
    e.preventDefault()

         let data=new FormData()
         data.append('name',name)
         data.append('desc',desc)
         data.append('year',year)
         data.append('img',img)
         data.append('cat',cat)
    
        fetch('/api/addmovie',{
          method:'POST',
          body:data
        }).then((result)=>{return result.json()}).then((data)=>{
          if(data.status===201){
                setMessage(data.message)
                navigate('/adminmoviemanage')
          }else{
               setMessage(data.message)
          }
        })
   }
   
   useEffect(()=>{
         fetch('/api/categoryrecord').then((result)=>{return result.json()}).then((data)=>{
                  if(data.status===200){
                    setCategory(data.apidata)
                  }else{
                     setMessage(data.message)
                  }
         })
   },[])
    
    return ( 
      
        <section id="mid">
      <div className="container">
        <div className="row">
          <Left/>
          <div className="col-md-9">
            <h2 className="text-center">Add More Movies Here</h2>
            {message}
            <form onSubmit={(e) => { handleform(e) }}>
              <label>Movie Name</label>
              <input type="text"
                className="form-control"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <label>Movie Descripation</label>
              <textarea
                className="form-control"
                value={desc}
                onChange={(e) => { setDesc(e.target.value) }} />
                
              <label>Movie Publish Year</label>
              <input type="text"
                className="form-control"
                value={year}
                onChange={(e) => { setYear(e.target.value) }}
              />
              <label>Movie Category Name</label>
              <select className="form-select" onChange={(e)=>{setCat(e.target.value)}} value={cat}>
                {category.map((result)=>(
                <option value={result.categoryName} key={result._id}>{result.categoryName}</option>
                ))}
              </select>
              <label>Movie Image</label>
              <input type="file"
                className="form-control"
                onChange={(e) => { handleimage(e) }}
              />
              <button type="submit" className="form-control btn btn-warning mt-2">Add Product</button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
       
     );
}

export default Adminaddmovie;