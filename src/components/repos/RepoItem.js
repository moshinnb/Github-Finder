import React from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({repo}) => {
  return (
    <div className='list-group' style={{padding:'10px'}}>
      <h3 className='list-group-item'>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}
RepoItem.propType={
    repo:PropTypes.object.isRequired
}
export default RepoItem
