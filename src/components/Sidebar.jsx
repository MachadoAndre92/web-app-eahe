import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside classname="h-screen bg-color-200">
        <div className='flex flex-col w-64 bg-gray-800 h-full text-gray-100'>
            <nav className='flex flex-col flex-1 py-4'>
                <Link
                className='flex items-center mt-4 py-2 px-6 hover:bg-gray-700 hover:border-1-4'>
                <i className='fas fa-tachometer-alt mr-3'></i>
                Dashboard
                </Link>

            </nav>

        </div>
    </aside>
  )
}
