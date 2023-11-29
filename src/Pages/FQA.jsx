import React from 'react'
import './PagesCss/AllCourses.css'
import Under_Construction from '../Components/Assets/Under_Construction.png'

const FAQ = () => {
  return (
    <div className="under-construction-container">
      <h1 className='gradient-text'>Page is Under Construction</h1>
      <p>We're working hard to bring you an awesome experience. Check back soon!</p>
      <img src={Under_Construction} alt="Under construction" className='under-construction' />
    </div>
  )
}

export default FAQ
