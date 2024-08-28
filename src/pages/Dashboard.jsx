import React from 'react'
import Layout from './Layout'
import Welcome from '../components/Welcome'

const Dashboard = () => {
  return (
    <Layout>
        <div className="my-5">
            <Welcome/>
        </div>
    </Layout>
  )
}

export default Dashboard
