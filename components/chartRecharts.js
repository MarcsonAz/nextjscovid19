import React, { useState, useEffect} from 'react';

import {BarChart, Bar} from 'recharts';

function Graph({country}) {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(null);

useEffect( ()=> {
  const runCall = async () => {
    let apiValue = await fetchData();
    setData(apiValue)
    setIsLoading(false)
  } 
  const fetchData = async () => {
    const requestOption = {
      method: "GET",
      redirect: "follow"
    }
    const apiUrl = `https://fastapitreino.herokuapp.com/countries/total/${country}`;

    await setTimeout( ()=> {},150)
    const res = await fetch(apiUrl, requestOption);
    const json = await res.json()
    return json
            
  }
  runCall();

}, [])

const col = () => Math.floor(Math.random()*16777215).toString(16);

return (
  <div className="chart-wrapper">
    {isLoading ?
    <div>loading...</div>:
    <BarChart width={150} height={40} data={data}>
        <Bar dataKey="cases" fill={`#${col()}`} />
    </BarChart>
    }
  </div>
  )
}

export default Graph;
  