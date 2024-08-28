import React from 'react'
import Layout from './Layout'
import ProductComponent from '../components/ProductComponent'

const Product = () => {
  return (
    <Layout>
        <div className="my-5">
            <ProductComponent/>
        </div>
    </Layout>
  )
}

export default Product
