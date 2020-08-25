import React from 'react'
import {Link} from 'react-router-dom'
import {_getUsers} from '../utils/_DATA'

const Home = () => {
  console.log(_getUsers())
  return(
    <>
      <div>Home</div>
      <Link to='/login'>Login</Link>
    </>
  )
}

export default Home