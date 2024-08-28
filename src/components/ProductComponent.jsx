import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductComponent = () => {
  const [product, setProduct] = useState([])
  const token = localStorage.getItem('token')

  const getProducts = async () => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      setProduct(data)
      
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div>
        <table className="table" style={{border: '2px solid', margin: '0 auto', width: '90%'}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kode</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {!product 
            ? <p>Produk Kosong</p> 
            : product.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.pd_name}</td>
                <td> {item.pd_code} </td>
                <td> ${item.pd_price} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductComponent
