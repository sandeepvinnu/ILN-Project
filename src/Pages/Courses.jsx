import React from 'react'
// import UnderConstruction from '../Components/UnderConstruction/UnderConstruction'
// import Corses from '../Components/Data/Courses.json'

const Courses = ({location}) => {
  
  const {state} = location;

  return (
    <div>
      <h1>Page 2</h1>
      <p>Data from Branches page: {state && state.data}</p>
    </div>
    // <UnderConstruction />
  )
}

export default Courses
