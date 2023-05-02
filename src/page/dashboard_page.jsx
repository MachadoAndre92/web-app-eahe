import React from 'react'
import Dashboard from '../components/Dashboard'
import Topbar from '../components/Topbar'
import Config from '../components/Config'

export default function dashboard() {
  return (
    <div className='h-screen'>
      <Topbar />
        
      <div className='flex h-screen justify-center'>
        <main>
          <Dashboard />
          <Config />
        </main>        
      </div>
    </div>
  )
}
