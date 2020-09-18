import React from 'react';
import Notfound from '../images/404.svg'

const NoMatch = () => {
  return (
    <div className='no-match'>
      <img src={Notfound} alt="not-found" />
    </div>
  )
}

export default NoMatch;