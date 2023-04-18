import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'






export default function Dashboard() {

    // Get the token from local storage
    //const token = localStorage.getItem('access_token');

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    // Set the default Authorization header
    //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Make the GET request
    useEffect(() => {
        async function fetchData() {
            try {
            await axios.get('http://localhost:8000/api/leituras/zona/1')
            .then(response => {
                console.log(response.data);
                setData1(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        } catch (error) {
            console.log(error);
        }
        }
            fetchData();
        }, []);

        useEffect(() => {
            async function fetchData() {
                try {
                await axios.get('http://localhost:8000/api/leituras/zona/2')
                .then(response => {
                    console.log(response.data);
                    setData2(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            } catch (error) {
                console.log(error);
            }
            }
                fetchData();
            }, []);
    


  return (
    
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data1 && (
            <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data1.zona.name}</div>
              <p className="text-gray-700 text-base font-bold">
                Hum: <a className='font-normal'>{data1.hum}</a>
              </p>
              <p className="text-gray-700 text-base font-bold">
                Temp: <a className='font-normal'>{data1.temp}</a>
              </p>
            </div>
          </div>

        )}

         {data2 && (
            <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data2.zona.name}</div>
              <p className="text-gray-700 text-base font-bold">
                Hum: <a className='font-normal'>{data2.hum}</a>
              </p>
              <p className="text-gray-700 text-base font-bold">
                Temp: <a className='font-normal'>{data2.temp}</a>
              </p>
            </div>
          </div>

        )}
    
    
    
    

    
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Exterior</div>
        <p className="text-gray-700 text-base">
          Teste
        </p>
      </div>
    </div>
    </div>

    
  )
}
