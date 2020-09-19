import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CountryList from '../components/countryList';
import API from '../components/suport/apiaxios';

const ids = () => Math.floor(Math.random()*999)

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>covid-19 azvdmrkn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
            <h3 className={styles.description}>Covid-19</h3>
            <h3 className={styles.description}>Few Countries Basic Informations</h3>
      </div>

      <main className={styles.main}>
        {data.map(ct => (
          <div key={ids()}> 
          < CountryList country={ct} />
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/MarcsonAz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by MarcsonAz
        </a>  

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

function toArray(obj) {
  let newArray = []
  for(let i in obj){
      newArray.push(obj[i])
  }
  return newArray
}  

function lastDate(data) {
  let newObj = {}
  data.map((obj,i) => {
    if(i===0) newObj[obj.country] = obj
    if(newObj.hasOwnProperty(obj.country)) {
        if(newObj[obj.country].date < obj.date) { // qual data mais recente
            newObj[obj.country] = obj
        }

    }else {
            newObj[obj.country] = obj
    }      
    })
    return toArray(newObj)
}

function sortTop(data,n) {
  let newArray = []
  data.forEach( obj => {
    newArray.push(obj)
    if (newArray.length > n) {
      newArray.sort(function(a, b) { return b.cases - a.cases })
      newArray.pop()
    }
  })
  return newArray
}

function prep(data) {
  // preciso filtrar o ultimo dia de cada pais
  const CountryLastDate = lastDate(data)
  // numeros de paises com mais casos a selecionar
  const topct = sortTop(CountryLastDate,5) 

  return topct
}

export async function getStaticProps(context) {
  const last_id = await API.get('count')
  const countries = await API.get(`all/?limit=${last_id.data.id}`)
  const data = await prep(countries.data) // numeros de paises com mais casos a selecionar
  return { props : {data}}
}
















/*
function editD(entrydate) {
  let date = new Date(entrydate).toLocaleDateString("en-GB")
  return date
}

function editN(entrynumber) {
  let num = Number(entrynumber).toLocaleString()
  return num
}
*/