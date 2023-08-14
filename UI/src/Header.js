import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Contextapi } from './Contextapi'


function Header() {
    let navigate= useNavigate()
   
   const {loginname,setLoginname}= useContext(Contextapi)

    function handlelogout(e){
        window.localStorage.removeItem('loginname')
        setLoginname(window.localStorage.getItem('loginname'))
        navigate('/')
    }
    
    return ( 
        <>{loginname?
        <section id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    
                    <nav className="navbar navbar-expand-lg navbar-light bg-info">
                        <div className="container-fluid">
                            <Link className="navbar-brand" >Entertainment</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active mt-2 ms-5 me-2" aria-current="page" to="/movies">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link active mt-2" aria-current="page">Welcome {loginname}</Link>
                                    </li>
                                </ul>
                                 
                                <button onClick={(e)=>{handlelogout(e)}} className='btn btn-danger' id='logout'>Logout</button>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
       :<p></p>}
    </>
     );
}

export default Header;