import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => { 
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {
    const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes)

    if (isLoading) {
        return <h2>Loading....</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

  return (
    <div className='flex flex-col m-16'>
        <h2 className='font-bold'>RQSuperHeroes Page!!!</h2>
        {data?.data.map((hero) => {
            return <div key={hero.name}>{hero.name}</div>
         })}
    </div>
  )
}

export default RQSuperHeroes