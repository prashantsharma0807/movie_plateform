import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Reg from './Reg';
import Login from './Login';
import Adminmovies from './Adminmovies';
import { useState } from 'react';
import {Contextapi} from './Contextapi'
import Header from './Header';
import Adminaddmovie from './Adminaddmovie';
import Dashboard from './Dashboard';
import Admincategory from './Admincategory';
import Movies from './Movies';

function App() {
            const [loginname,setLoginname]= useState(window.localStorage.getItem('loginname'))
  return ( 
            <>
            <Router >
              <Contextapi.Provider value={{loginname,setLoginname}}>    
              <Header/>          
              <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/reg' element={<Reg/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/adminmoviemanage' element={<Adminmovies/>}></Route>
              <Route path='/adminaddmovies' element={<Adminaddmovie/>}></Route>
              <Route path='/admincategory' element={<Admincategory/>}></Route>
              <Route path='/movies' element={<Movies/>}></Route>
              </Routes>
              </Contextapi.Provider>
            </Router>
            
            </>
   );
}

export default App;