import { Link, useNavigate } from "react-router-dom";
import Left from "./Left";
import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";

function Adminmovies() {
    const {loginname}=useContext(Contextapi)
    const [movie,setMovie]=useState([])
    const [message,setMessage]=useState('')
    const navigate=useNavigate()

    if(!loginname){
        navigate('/')
    }
useEffect(()=>{
      fetch('/api/allmovies').then((result)=>{return result.json()}).then((data)=>{
            if(data.status===200){
                setMovie(data.apidata)
            }else{
                setMessage(data.message)
            }
      })
},[movie])
  
function handledelet(e,id){
         
        fetch(`/api/deletemovie/${id}`,{
            method:'DELETE'
        }).then((result)=>{return result.json()}).then((data)=>{
            if(data.status===200){
                setMessage(data.message)
            }else{
                setMessage(data.message)
            }
        })
    
}

    return ( 
       
        <section id="mid">
        <div className="container">
        <div className="row">
        <Left/>
        <div className="col-md-9">
            <h2 className="text-center">Movies Management</h2>
            {message}
            <Link to='/adminaddmovies'><button className="form-control btn btn-info">Add More Movies </button></Link>
            
            <table className="table align-middle">
                
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Movie Name</th>
                        <th>Movie Image</th>
                        <th>Movie Descripation</th>
                        <th>Movie Publish Year</th>
                        <th>Movie Category</th>
                        <th>Movie Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movie.map((result,key)=>(
                <tr key={result._id}>
                    <td>{key+1}</td>
                    <td>{result.name}</td>
                    <td><img src={`./image/${result.img}`} style={{width:'180px'}} alt=""/></td>
                    <td>{result.desc}</td>
                    <td>{result.year}</td>
                    <td>{result.cat}</td>
                    <td onClick={(e)=>{handledelet(e,result._id)}}><button className="btn btn-danger">Delete</button></td>
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

export default Adminmovies;