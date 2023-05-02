import React from 'react'

export default function Leitura(props) {
  return (
       
    <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <p className="text-gray-700 text-base font-bold">
                Temp: <a className='font-normal'>{props.temp}</a>
            </p>
            <p className="text-gray-700 text-base font-bold">
                Hum: <a className='font-normal'>{props.hum}</a>
            </p>
        </div>
    </div>
    
   
  )
}
