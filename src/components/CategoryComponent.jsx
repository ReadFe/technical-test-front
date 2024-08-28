import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CategoryComponent = () => {
  const [category, setCategory] = useState([])
  const token = localStorage.getItem('token')

  const getCategory = async () => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/category`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      setCategory(data)
      
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    getCategory();
  }, [])

  return (
    <div>
        <table className="table" style={{border: '2px solid', margin: '0 auto', width: '90%'}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Kategori</th>
            <th>Kode</th>
          </tr>
        </thead>
        <tbody>
        {!category 
            ? <p>Produk Kosong</p> 
            : category.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.ct_name}</td>
                <td> {item.ct_code} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryComponent
