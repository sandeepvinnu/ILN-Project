import React from 'react'
import { useLocation } from 'react-router-dom';
// import UnderConstruction from '../Components/UnderConstruction/UnderConstruction'
// import Corses from '../Components/Data/Courses.json'

const Courses = () => {
  
  const location = useLocation();
  const {state} = location;
  // const {data} = state;
  // const {URL} = data;

  return (
    <div>
      <h1>Page 2</h1>
      <p>Data from Branches page: {state && state.data && state.data.url}</p>
    </div>
    // <UnderConstruction />
  )
}

export default Courses
