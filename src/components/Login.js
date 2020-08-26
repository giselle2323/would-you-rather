import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getUsers} from '../redux/actions/users/userActions'


const Login = (props) => {
  const { getAllUsers, allUsers } = props
  useEffect(() => {
    getAllUsers()
    
  }, [getAllUsers]);
  
  console.log(allUsers)
  console.log(Object.keys(allUsers.users).map(users =>
    {
      return users;
    }
  ))
 return (
  <>
     <div>Login page</div>
     {/* <form >
         <label for="userSelect">Select User</label>
         <input
           id="userSelect"
           type="select"
           name="select"
         >
           <option value={2} disabled>Please select</option>
           {
             Object.keys(allUsers.users).map(users =>
               <option key={users} value={users}>
                 {allUsers.users[users].name}
               </option>)
           }
         </input>
       <input disabled='' type="submit" value="Submit" />
     </form> */}
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