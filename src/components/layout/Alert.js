import React from 'react'
import {AiFillWarning}  from 'react-icons/ai'
import PropTypes from 'prop-types'
const Alert = ({closefun,alert}) => {
    
  return (
    alert!= null &&(
    <div className="p-3 mb-2 bg-warning text-dark"> 
        <AiFillWarning/> {alert.msg}  
        <button type="button" className="close" onClick={closefun}>
           <span aria-hidden="true" >&times;</span>
       </button>
    </div>
  )
  )
}
Alert.propType={
    closefun:PropTypes.func.isRequired
}

// <button type="button" class="close" aria-label="Close" >
//             <span aria-hidden="true" onClick={this.props.closefun}>&times;</span>
//         </button>
export default Alert
