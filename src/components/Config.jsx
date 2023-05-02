import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'






export default function Config() {

  const [zonas, setZonas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/zonas')
        .then(response => {
            console.log(response.data);
            setZonas(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


  return (
    <div  className="rounded overflow-hidden shadow-lg">
      
      <p className="font-bold text-xl mb-2 px-6 py-4">Configs</p>
      <div className="px-6 py-4 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <label className="text-gray-700" htmlFor="Zonas">
            <p className="text-gray-700 text-base font-bold">Zonas</p>
            <select id="Zonas" className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                <option value="">
                    Selecione uma zona
                </option>
                {zonas.map((item) => (  
                <option key={item.id}>
                    {item.name}
                </option>
                ))}
            </select>
        </label>

        <div className="flex ">
          <p className="text-gray-700 text-base font-bold">Modo</p>
          <div className="flex gap-2">
              <label className="inline-flex items-center">
              
              <input type="radio" name="mode" value={1} className="w-5 h-5 text-red-600"/>
                  <span className="ml-2 text-gray-700">
                      Automático
                  </span>
              </label>
              <label className="inline-flex items-center">
                  <input type="radio" name="mode" value={0} className="w-5 h-5 text-red-600"/>
                      <span className="ml-2 text-gray-700">
                          Manual
                      </span>
              </label>
          </div>
        </div>
      </div>
    </div>
  )
}
