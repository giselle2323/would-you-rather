import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('')
  
  const onChangeTab = () => {

  }
  
  return (
    <div>Dashboard</div>
  )
}

export default (connect)(Dashboard);