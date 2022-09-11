import React, { Fragment, useEffect } from 'react'
import Spinner from './layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai'
import { FaTimesCircle } from 'react-icons/fa'
import Repos from './repos/Repos';




const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const { name, company, avatar_url, location, bio, blog, login, html_url
        , followers, following, public_repos, public_gist, hireable } = user;

    if (loading) return <Spinner />;
    else {
        return (
            <Fragment>
                <Link to="/" className='btn btn-light'  >
                    Back To Search
                </Link>
                Hireable:{''}
                {hireable ? <AiOutlineCheck /> : <FaTimesCircle />}
                <div className="card mb-3" >{/*style={{maxWidth:'540px'}*/}
                    <div className="row no-gutters">
                        <div className='col-md-4'>
                            <div className='card-body'>
                                <img src={avatar_url} className="round-image" alt="" style={{ width: '150px' }} />
                                <h1>{name}</h1>
                                <p>{location}</p>
                            </div>
                        </div>
                        <div className='col-md-8' >
                            <div className='card-body'>
                                {bio && (<Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>)}
                                <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                                <ul >
                                    <li>{login && (<Fragment>
                                        <strong> Username: </strong>{login}
                                    </Fragment>)}
                                    </li>
                                    <li>{company && (<Fragment>
                                        <strong> Company: </strong>{company}
                                    </Fragment>)}
                                    </li>
                                    <li>{blog && (<Fragment>
                                        <strong> Website: </strong>{blog}
                                    </Fragment>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-text-center'>
                    <span className='badge badge-pill badge-primary'>Followers:{followers}</span>
                    <span className='badge badge-pill badge-success'>Following:{following}</span>
                    <span className='badge badge-pill badge-danger'>Public Repos:{public_repos}</span>
                    <span className='badge badge-pill badge-primary'>Public Gist:{public_gist}</span>
                </div>
                <Repos repos={repos} />

            </Fragment>
        )
    }

}
User.propType = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User



// <div className="card text-center">
// <div className='card-body'>
//     <img src={avatar_url} className="round-image" alt="" style={{width:'150px'}}/>
// <h1>{name}</h1>
// <p>{location}</p>
// </div>
// <div >
//     {bio &&(<Fragment>
//         <h3>Bio</h3>
//         <p>{bio}</p>
//         </Fragment>)}
//     <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
//     <ul >
//         <li>{login && (<Fragment>
//             <strong> Username: </strong>{login}
//         </Fragment>)}
//         </li>
//         <li>{company && (<Fragment>
//             <strong> Company: </strong>{company}
//         </Fragment>)}
//         </li>
//         <li>{blog && (<Fragment>
//             <strong> Website: </strong>{blog}
//         </Fragment>)}
//         </li>
//     </ul>
// </div>
// </div>
