import React, {useEffect} from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import {getUsers} from '../actions/shared'


const Login = (props) => {
  const {dispatch, users } = props
  useEffect(() => {
    dispatch(getUsers())
    console.log(getUsers)
    
  }, [dispatch]);
  
  console.log(users)

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
function mapStateToProps({ users }, { id }) {

  return {
    users
  }
}
export default connect(mapStateToProps)(Login)