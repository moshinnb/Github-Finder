import React, { useContext } from 'react'
import {AiFillWarning}  from 'react-icons/ai'
import AlertContext from '../../context/alert/alertContext'
const Alert = () => {
    const alertContext=useContext(AlertContext);
    const {closefun,alert}=alertContext;
  
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


export default Alert
