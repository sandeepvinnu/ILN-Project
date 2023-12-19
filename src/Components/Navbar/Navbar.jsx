import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/iln-logo-png-14@2x.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [menu,setMenu] = useState('home');
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={logo} alt=''/>
        </Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('home')}}><Link to='/' style={{textDecoration:'none', color: 'white' }}>HOME</Link> {menu==='home'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Category')}}><Link to='/Category' style={{textDecoration:'none', color: 'white'}}>CATEGORY</Link> {menu==='Category'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Allcourse')}}><Link to='/Allcourse' style={{textDecoration:'none', color: 'white'}}>ALL COURSES</Link> {menu==='Allcourse'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('FAQs')}}><Link to='/FAQs' style={{textDecoration:'none', color: 'white'}}>FAQs</Link> {menu==='FAQs'? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu('Blog')}}><Link to='/Blog' style={{textDecoration:'none', color: 'white'}}>BLOG</Link> {menu==='Blog'? <hr/>:<></>} </li>
        

      </ul>
      <div className='nav-login-btn'>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      </div>
    </div>
  )
}

export default Navbar