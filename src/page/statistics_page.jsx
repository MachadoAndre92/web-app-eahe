import React from 'react'
import Topbar from '../components/Topbar'
import Statistics from '../components/LineChart'

export default function statistics() {
  return (
    <div className='h-screen'>
      <Topbar />
        
      <div className='justify-center'>
        <main>
          <div>
            <Statistics />
          </div>
         
        </main>        
      </div>
    </div>
  )
}
