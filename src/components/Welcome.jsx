import React from 'react'

const Welcome = () => {
  const user = localStorage.getItem('user')

  return (
    <div>
        <h1 className='title'>Dashboard</h1>
        <h2 className="subtitle">Welcome Back {user}</h2>
    </div>
  )
}

export default Welcome
