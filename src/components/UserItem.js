import React from 'react'
import PropTypes from 'prop-types'
//statelessFunction
import { Link } from 'react-router-dom'
const UserItem = ({user:{login,avatar_url,html_url}})=>{
    // const {login,avatar_url,html_url}=props.user;
    return (

      <div className="card text-center">
        <div className='card-body'>
          <img src={avatar_url} alt="" className='card-title' style={{width:'60px'}}/>
        <h3 className='card-text'>{login}</h3>
        <div>
        <Link  to={`/user/${login}`} className='btn btn-dark'>More</Link> 
        </div>
        </div>
      </div>


    )
  
}
UserItem.propType={
  user:PropTypes.object.isRequired
}

export default UserItem



//below is class based impelmentation
// class UserItem extends Component {

  
//   render() {
//     const {login,avatar_url,html_url}=this.props.user;
//     return (

//       <div className="card text-center">
//         <div className='card-body'>
//           <img src={avatar_url} alt="" className='card-title' style={{width:'60px'}}/>
//         <h3 className='card-text'>{login}</h3>
//         <a href={html_url} className='btn btn-dark' target={"_blank"} >More</a> 

//         </div>
//       </div>


//     )
//   }
// }
