import React, { useContext, useState } from 'react'

import GithubContext from '../../context/github/githuContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext=useContext(GithubContext);
  const [text, setText] = useState('');
  const alertContext=useContext(AlertContext);
  
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    }
    else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div onSubmit={onSubmit} className='container' style={{ padding: '10px' }}>
      <form >
        <div className="form-group" >

          <input type="text" className="form-control"
            name='text'
            placeholder="Search User..."
            value={text}
            onChange={onChange} />
        </div>
        {/* <input type='text' 
            name='text' 
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}/> */}
        <input type="submit" value="Search" className="btn btn-dark btn-block" />

      </form>

      {githubContext.users.length>0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}



    </div>
  )

}


export default Search
