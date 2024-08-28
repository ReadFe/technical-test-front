import {useState, useEffect} from 'react'
import axios from 'axios'

const OrderComponent = () => {
  const [order, setOrder] = useState([])
  const token = localStorage.getItem('token')

  const getOrders = async () => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      setOrder(data)
      
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    getOrders();
  }, [])
  return (
    <div>
        <table className="table" style={{border: '2px solid', margin: '0 auto', width: '90%'}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Order</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {!order 
            ? <p>Produk Kosong</p> 
            : order.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td> {item.or_pd_id} </td>
                <td> ${item.or_amount} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderComponent
