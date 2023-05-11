import React from 'react'
import ArSwitch from './ArSwitch'



export default function Leitura(props) {
  return (
       
    <div className="rounded overflow-hidden shadow-lg grid">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <span className="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0">
                    </span>Temperatura: <a className='font-normal'> {props.temp}ºC</a></span>
            

                    <span className="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                        <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0">
                            </span>Humidade: <a className='font-normal'>{props.hum}%</a></span>
            
        </div>
        <p className="text-gray-700 text-base font-bold px-6">Conduta de ar</p>

        <div className="px-2 ">          
            <ArSwitch key={props.id} ar={props.ar} id_zona={props.id_zona} name={props.name}/>
        </div>
        
        
        
            
    </div>
    
   
  )
}
