import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function VentoinhaSwitch(props) {
    const [checked, setChecked] = useState(props.mode);
    
    

      const handleChange = () => {
        console.log('checked = ', checked);
        setChecked(!checked); 
        if(checked){
            updateData(0);
        }else{
            updateData(1);
        }
      }; 

      const updateData = async (x) => {
        try {
            const updatedData = {
                mode: x
            };
            const response = await axios.put('http://localhost:8000/api/ventoinhas/'+props.id, updatedData);
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
        </div>
    </div>
  )
}
