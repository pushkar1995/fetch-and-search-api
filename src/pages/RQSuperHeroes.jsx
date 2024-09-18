import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const RQSuperHeroes = () => {
    const { isLoading, data } = useQuery('super-heroes', () => { 
        return axios.get('http://localhost:4000/superheroes')
    })

    if (isLoading) {
        return <h2>Loading....</h2>
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