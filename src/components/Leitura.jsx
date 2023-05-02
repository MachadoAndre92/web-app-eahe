import React from 'react'

export default function Leitura(props) {
  return (
       
    <div className="rounded overflow-hidden shadow-lg grid">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <p className="text-gray-700 text-base font-bold">
                Temp: <a className='font-normal'>{props.temp}</a>
            </p>
            <p className="text-gray-700 text-base font-bold">
                Hum: <a className='font-normal'>{props.hum}</a>
            </p>
        </div>
        <p className="text-gray-700 text-base font-bold px-6">Conduta de ar</p>
        <div className="px-2 ">
          
          <div className="flex gap-2">
              <label className="inline-flex items-center">
              
              <input type="radio" name={props.name} value={1} className="w-5 h-5 text-red-600"/>
                  <span className="ml-2 text-gray-700">
                      Aberto
                  </span>
              </label>
              <label className="inline-flex items-center">
                  <input type="radio" name={props.name} value={0} className="w-5 h-5 text-red-600"/>
                      <span className="ml-2 text-gray-700">
                          Fechado
                      </span>
              </label>
          </div>
        </div>
    </div>
    
   
  )
}
