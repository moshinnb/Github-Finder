import React, { Component } from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import Spinner from './layout/Spinner'
const Users =({users,loading})=> {
    if(loading){return <Spinner/>}
    else{
    
    return (
      <div style={userStyle}>
        {users.map(user=>(
        <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
   }
  
}
Users.propType={
  users:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
}
const userStyle={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',gridGap:'1rem'
}


export default Users


//intial state
/*state={users:[
    {
    id:'1',
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  },
  {
    id:'2',
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    html_url:  "https://github.com/defunkt"
  },
  {
    id:'3',
    login: "pjhyett",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    html_url: "https://github.com/pjhyett"
  }, {
    id:'4',
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  },
  {
    id:'5',
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    html_url:  "https://github.com/defunkt"
  },
  {
    id:'6',
    login: "pjhyett",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    html_url: "https://github.com/pjhyett"
  }

  ]
}*/