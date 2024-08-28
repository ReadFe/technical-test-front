import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    navigate('/')
  }
  return (
    <div>
        <aside className="menu has-shadow p-3">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
        </ul>
        <p className="menu-label">Content</p>
        <ul className="menu-list">
          <NavLink to="/dashboard/products" className={({ isActive }) => (isActive ? 'active' : '')}>
              Product
          </NavLink>
          <NavLink to="/dashboard/categories" className={({ isActive }) => (isActive ? 'active' : '')}>
              Category
          </NavLink>
          <NavLink to="/dashboard/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
              Order
          </NavLink>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
            <li><button onClick={logout}>Log out</button></li>
        </ul>
        </aside>
    </div>
  )
}

export default Sidebar
