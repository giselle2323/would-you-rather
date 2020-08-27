import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialData} from '../redux/actions/shared'

const Home = (props) => {
  const { dispatch, users } = props
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);

  return(
    <div>
      <h2>We are home</h2>
    </div>
  )
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Home)