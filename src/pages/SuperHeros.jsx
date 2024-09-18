import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SuperHeros = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => { 
        axios.get('http://localhost:4000/superheroes').then((res) => { 
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading....</h2>
    }

  return (
    <div className='flex flex-col m-16'>
        <h2>Super Heros Page!!!</h2>
        {data.map((hero) => {
            return <div key={hero.name}>{hero.name}</div>
         }) }
    </div>
  )
}

export default SuperHeros