import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialData} from '../redux/actions/shared'
import SelectUser from '../components/SelectUser'
import Dashboard from './Dashboard'
const Home = (props) => {
  const { dispatch, allUsers, authedUser} = props
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);
  console.log(allUsers)
  return(
    <div>
      {authedUser === null ? <SelectUser /> : <Dashboard />

      }
        
    </div>
  )
};

const mapStateToProps = ({ allUsers, authedUser, questions }) => {
  return {
    allUsers,
    authedUser,
    questions,

  };
};

export default connect(mapStateToProps)(Home)