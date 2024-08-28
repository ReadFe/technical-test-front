import React from 'react'
import Layout from './Layout'
import CategoryComponent from '../components/CategoryComponent'

const Category = () => {
  return (
    <div>
      <Layout>
        <div className="my-5">
            <CategoryComponent/>
        </div>
      </Layout>
    </div>
  )
}

export default Category
