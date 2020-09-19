import React, { useState, useEffect} from 'react';
import styles from '../styles/Home.module.css';

function CountryList({country}) {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect( ()=> {
  const runCall = async () => {
    let apiValue = await country;
    setData(apiValue)
    setIsLoading(false)
  } 
  runCall();
}, [])

const col = () => Math.floor(Math.random()*16777215).toString(16);

return (
  <div>
    {isLoading ?
    <div>loading...</div>:
    <div className={styles.country}>
        <a>{data.country} : </a>
        <a>{data.cases} casos</a>
        <a>{data.deaths} mortes</a>
        <a>{data.recoveries} recuperados</a>
        <a>em {data.date.toString()}</a>
    </div>    
    }
  </div>
  )
}

export default CountryList;

/* <BarChart width={150} height={40} data={data}>
        <Bar dataKey="cases" fill={`#${col()}`} />
    </BarChart> */


/*  LOAD DATA inside component ....

const fetchData = async () => { 
    await setTimeout( ()=> {},150)
    const res = await API(`countries/${country}`);
    return res.data
    
    const requestOption = {
      method: "GET",
      redirect: "follow"
    }
    const apiUrl = `https://fastapitreino.herokuapp.com/countries/${country}`;

    await setTimeout( ()=> {},1250)
    const res = await fetch(apiUrl, requestOption);
    const json = await res.json()
    return json  */    