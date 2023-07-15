import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function VentoinhaSwitch(props) {
    const [checked, setChecked] = useState(props.mode);
    const [value, setValue] = useState(props.velocidade);
    
    

      const handleChange = () => {
        console.log('checked = ', checked);
        setChecked(!checked); 
        if(checked){
            updateData(0,value);
        }else{
            updateData(1,value);
        }
      }; 

      const barChange = (event) => {
        
        setValue(event.target.value);
        console.log(event.target.value);
        if(checked){
            updateData(0,event.target.value);
        }else{
            updateData(1,event.target.value);
        }
        
        };

      const updateData = async (x, y) => {
        try {
            const updatedData = {
                mode: x,
                velocidade: y
            };
            const response = await axios.put('http://13.53.73.223/api/ventoinhas/'+props.id, updatedData);
            console.log(response.data);
            // Fetch data again to reflect the changes
            //fetchData();
        } catch (error) {
            console.error(error);
        }
        };


  return (
    <div>
        <div className="px-6 py-4">        
            <label htmlFor="1" className="flex items-center cursor-pointer relative mb-4">
            <input type="checkbox" id="1" className="sr-only" onChange={handleChange} checked={checked} />
            <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" ></div>
            <span className="ml-3 text-gray-900 text-sm font-medium">{checked ? 'Ventoinha Ligada' : 'Ventoinha Desligada'}</span>
            </label>
            <label hmtlfor="VentoinhaVelocidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Velocidade: {value}</label>
            <input id="VentoinhaVelocidade" type="range" defaultValue={value} onClick={barChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
        </div>
        
    </div>
  )
}
