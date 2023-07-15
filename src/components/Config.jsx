import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VentoinhaSwitch from './VentoinhaSwitch';


export default function Config() {

  const [ventoinhas, setVentoinhas] = useState([]);

    useEffect(() => {
        axios.get('http://13.53.73.223/api/ventoinhas')
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
          <div key={item.id}>
              <p className="text-gray-700 text-base font-bold px-6">{item.name}</p>
            <VentoinhaSwitch  id={item.id} mode={item.mode} velocidade={item.velocidade}/>
          </div>

        ))}

        
            
    </div>
    
  )
}
