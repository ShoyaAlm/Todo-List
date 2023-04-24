import React from 'react'
// import PropTypes from 'prop-types'
import Objectives from '../model/objective'

const Setup = () => {
  const objectives = Objectives
    for (let i=0 ; i< objectives.length ; i++){
      // return (
      //   <div>
      //     <h3>{objectives[i].name}</h3>
      //     <h4>{objectives[i].date}</h4>
      //   </div>
      // )
      console.log(objectives[i].name);
    }
  
  
}

export default Setup