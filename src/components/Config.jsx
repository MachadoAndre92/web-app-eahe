import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VentoinhaSwitch from './VentoinhaSwitch';


export default function Config() {

  const [ventoinhas, setVentoinhas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/ventoinhas')
        .then(response => {
            console.log("Config Fetch:", response.data);
            setVentoinhas(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


  return (
    <div  className="rounded overflow-hidden shadow-lg">
      
      <p className="font-bold text-xl mb-2 px-6 py-4">Configs</p>
      {ventoinhas.map((item) => (
          <><p className="text-gray-700 text-base font-bold px-6">{item.name}</p>
          <VentoinhaSwitch key={item.id} id={item.id} mode={item.mode} /></>

        ))}
            
    </div>
    
  )
}
