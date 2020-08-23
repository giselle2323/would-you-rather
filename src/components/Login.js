import React, {useEffect} from 'react'
import Select from 'react-select'
import {_getUsers} from '../utils/_DATA'


const Login = () => {

  useEffect(() => {
    
  
  }, []);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
 return (
  <>
     <div>Login page</div>
     <form>

       <label for="userSelect">Select User </label>
       <Select options={options} />
      <input type="submit" value='Submit'/>
     </form>
  </>
 )

}

export default Login