import  { useState, useEffect } from 'react';
import axios from 'axios';

/*function AxiosGet({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const requestOptions = {
      //method: 'GET',
      Credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow'
    };

    axios.get(url, requestOptions)
      .then(response => response.json())
      .then(data => 
        setData(data))
      .catch(error => console.log(error));
  }, []); 

  return {data};
}

export default AxiosGet;*/

export const getHeroes = (url) => {
  const [heroes, setHeroes] = useState()

  useEffect(() => {
    axios.get(url, requestOptions)
    .then(response => {
      const newData = response.data; // O ajusta según la estructura real de la respuesta
      setHeroes(newData);
    })
    .then(data => setHeroes(data))
    .catch(error => console.log(error));
  }, [])

  return heroes
}

