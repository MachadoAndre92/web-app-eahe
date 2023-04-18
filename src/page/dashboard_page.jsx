import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function dashboard() {
  return (
    <div className='h-screen'>
      <Topbar />
        
      <div className='flex h-screen'>
        <main>
          <Dashboard />
        </main>        
      </div>
    </div>
  )
}
