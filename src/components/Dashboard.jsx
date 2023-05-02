import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Leitura from './Leitura';


export default function Dashboard() {

  // Get the token from local storage
    //const token = localStorage.getItem('access_token');

    // Set the default Authorization header
    //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const [leituras, setLeituras] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/leituras')
        .then(response => {
            console.log(response.data);
            setLeituras(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    
    
  return (
    <div>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      <img
        src="https://i.pinimg.com/736x/20/af/50/20af509b0058597521fa126ae0ecd148.jpg"
        className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
        alt="..." />

        {leituras.map((item) => (
          <Leitura key={item.id} name={item.zona.name} temp={item.temp} hum={item.hum} />
        ))}
       
      </div>
      
    </div>
    
    
  )
}
