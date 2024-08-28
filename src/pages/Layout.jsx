import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <div style={{height: '100vh'}}>
      <React.Fragment>
        <div className="columns">
            <div className="column is-2" style={{height: '100vh', position: 'sticky', top: '0' }}>
                <Sidebar/>
            </div>
            <div className="column" style={{borderLeft: '1px solid'}}>
                <main className='px-5'>
                    {children}
                </main>
            </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Layout
