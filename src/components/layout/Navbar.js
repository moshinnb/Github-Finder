import React from 'react'
import {Link} from 'react-router-dom';
import { FaGithub} from "react-icons/fa";
import PropTypes from 'prop-types'
// import { icons } from 'react-icons/lib';

const Navbar=props=>{
      return (<>
  <nav className="navbar navbar-light bg-light">
    <h1 ><FaGithub/>{props.title} </h1>
          <ul  className="nav justify-content-end">
            <li  className="nav-item">
              <Link  className="nav-link active" to="/">Home</Link>
            </li>
            <li  className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>


  {/* <span className="nav-item">
  <Link to='/' className='nav-link' aria-current="page"  style={{color:'solid-black'}}>Home</Link>
  </span>
  <span className="nav-item">
  <Link to='/about' className='nav-link'>About</Link>
  </span> */}
  
  
</nav>
{/*     
      <div className='nav bg-secondary'>
      <h1 className='nav-item'> <FaGithub/>{props.title} </h1>
       

        <ul className="nav justify-content-end">
        <h2 className='nav-item' >
        <Link to='/' className='nav-link' aria-current="page"  style={{color:'solid-black'}}>Home</Link>
      
        </h2>
        <h2 className='nav-item'>
        <Link to='/about' className='nav-link'>About</Link>
      
        </h2>
        </ul>
        </div>  */}
      </>
    );
  
}
Navbar.propTypes={
  title:PropTypes.string.isRequired
  // icons:PropTypes.string.isRequired
};//for checking type of passed elements

export default Navbar;


// class based impelementation
// export class Navbar extends Component {
//   PropTypes={
//     title:PropTypes.string.isRequired
//     // icons:PropTypes.string.isRequired
//  };//for checking type of passed elements
 
//     render() {
//     return (
//       <div className='navbar bg-primary'>
//         <h1> <FaGithub/>{this.props.title} </h1>
//       </div>
//     )
//   }
// }
