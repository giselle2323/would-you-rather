import React, {useEffect} from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import {getUsers} from '../actions/users'


const Login = (props) => {
  const { getAllUsers } = props
  useEffect(() => {
    getAllUsers()
    
  }, [getAllUsers]);
  

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
const mapStateToProps = ({ allUsers })  => {

  return {
    allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers:() => {
      dispatch(getUsers())
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)