import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";
import { useNavigate } from "react-router-dom";

function Movies() {
    const {loginname}= useContext(Contextapi)
    const [movie,setMovie]=useState([])
    const [message,setMessage]=useState('')
    const [category,setCategory]=useState([])
   // const [catMovie,setCatMovie]=useState([])
    const [cat,setCat]=useState('Hindi')
    const navigate=useNavigate()

if(!loginname){
    navigate('/')
}

useEffect(()=>{
    fetch('/api/moviecollection').then((result)=>{return result.json()}).then((data)=>{
        if(data.status===200){
            console.log(data)
            setMovie(data.apidata)
        }else{
            setMessage(data.message)
        }
    })
},[])

   useEffect(()=>{
    fetch('/api/categorytype').then((result)=>{return result.json()}).then((data)=>{
        if(data.status===200){
            
          setCategory(data.apidata)
        }else{
           setMessage(data.message)
        }
})
   },[])

   function handleform(e){
    e.preventDefault()
    const data={cat}
   
    fetch('/api/accordingtocat',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then((result)=>{return result.json()}).then((data)=>{
        if(data.status===200){
             console.log(data)
    
              setMovie(data.apidata)
        }else{
            setMessage(data.message)
        }
    })

   }

    return ( 
    
        <section id="movie">
            {message}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label className="form-label me-2">Search by Category</label>
                        <select value={cat} onChange={(e)=>{setCat(e.target.value)}} style={{border:'2px solid black',width:'80px'}}>
                            {category.map((result)=>(
                            <option value={result.categoryName} key={result._id}>{result.categoryName}</option>
                            ))}
                        </select>
                        <button type="submit" className="btn btn-success ms-2">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        
        <div className="container">
            
        <div className="row">
        {movie.map((result)=>(
        <div className="col-md-4" key={result._id}>
                <div className="card mx-auto mt-2" style={{width:'18rem',height:'30rem'}}>
                <img src={`./image/${result.img}`} className="card-img-top img-fluid mx-auto mt-1" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <h6>Published in Year {result.year}</h6>
                  <p className="card-text">{result.desc}</p> 
                </div>
              </div>
        </div>
        ))}
        </div>
        
        </div>
        

    </section>
        

     );
}

export default Movies;