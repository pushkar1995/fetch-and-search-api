import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => { 
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroes = () => {

    const onSuccess = (data) => { 
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => { 
        console.log('Perform side effect after encountering error', error)
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        'super-heroes', 
        fetchSuperHeroes,
        {
            // enabled: false,
            onSuccess,
            onError
        }
    )

    console.log({ isLoading, isFetching})

    if (isLoading || isFetching) {
        return <h2>Loading....</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

  return (
    <div className='flex flex-col m-16'>
        <h2 className='font-bold'>RQSuperHeroes Page!!!</h2>
        <button className='border-2 border-black' onClick={refetch}>Fetch Heroes</button>
        {data?.data.map((hero) => {
            return <div key={hero.name}>{hero.name}</div>
         })}
    </div>
  )
}

export default RQSuperHeroes