import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        us_email: email,
        us_password: password
      })
      const token = res.data.token;
      const user = res.data.user.us_name;
      localStorage.setItem('token', token)
      localStorage.setItem('user', user)

      navigate('/dashboard')
      
    } catch (error) {
      setMsg(error.response.data.message)
    }
  }

  return (
    <div>
      <section className="hero is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container is-max-tablet">
            <form onSubmit={handlePost} className="box">
                <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="control">
                    <input className="input" type="email" placeholder="e.g. alex@example.com" onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="control">
                    <input className="input" type="password" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>

                <p className='has-text-danger'>{msg ? msg : null}</p>

                <button className="button is-primary is-fullwidth mt-5">Log in</button>
                </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
