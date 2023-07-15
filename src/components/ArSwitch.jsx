import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function ToggleSwitch(props) {

      
      const [checked, setChecked] = useState(props.ar);

      const handleChange = () => { 
        console.log('props.id_zona = ', props.id_zona);
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
                conduta_ar: x
            };
            const response = await axios.put('http://13.53.73.223/api/zonas/'+props.id_zona+'/ar', updatedData);
            console.log(response.data);
            // Fetch data again to reflect the changes
            //fetchData();
        } catch (error) {
            console.error(error);
        }
        };
            

  return (
    
    <div className="px-6 py-4">
        
        <label htmlFor={props.name} className="flex items-center cursor-pointer relative mb-4">
        <input type="checkbox" id={props.name} className="sr-only" onChange={handleChange} checked={checked} />
        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" ></div>
        <span className="ml-3 text-gray-900 text-sm font-medium">{checked ? 'Conduta de Ar Aberto' : 'Conduta de Ar Fechado'}</span>
        </label>
    </div>
  )
}
