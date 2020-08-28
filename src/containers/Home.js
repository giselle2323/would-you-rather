import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialData} from '../redux/actions/shared'

const Home = (props) => {
  const { dispatch, allUsers } = props
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);
  console.log(allUsers)
  return(
    <div>
      <h2>We are home</h2>
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
    </div>
  )
};

const mapStateToProps = ({ allUsers }) => {
  return {
    allUsers,
  };
};

export default connect(mapStateToProps)(Home)