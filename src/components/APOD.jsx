import { useEffect, useState } from 'react'
import axios from 'axios'

function APOD() {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState(null)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://api.nasa.gov/planetary/apod",{
            params:{
                api_key:import.meta.env.VITE_NASA_API_KEY
            }
        }).then((res)=>{
            setData(res.data)
            setLoading(false)
        })
    },[])
    if(loading) return(<p>Loading...</p>)
  return (
    <>
    <div><img src={data.hdurl} alt={data.title}/></div>
    <h1>{data.title}</h1>
    <div>{data.date}</div>
    <p>{data.explanation}</p>
    </>
  )
}

export default APOD