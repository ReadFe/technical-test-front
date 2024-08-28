import React from 'react'
import Layout from './Layout'
import OrderComponent from '../components/OrderComponent'

const Order = () => {
  return (
    <Layout>
        <div className="my-5">
            <OrderComponent/>
        </div>
    </Layout>
  )
}

export default Order
