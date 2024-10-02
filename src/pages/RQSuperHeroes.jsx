import { Link } from 'react-router-dom'
import { useSuperHeroesData, useAddSuperHeroData } from '../hooks/useSuperHeroesData'
import { useState } from 'react'

const RQSuperHeroes = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const { mutate: addHero } = useAddSuperHeroData()

    const handleAddHeroClick = () => { 
        console.log({ name, alterEgo })
        const hero = { name, alterEgo}
        addHero(hero)
    }

    const onSuccess = (data) => { 
        console.log('Perform side effect after data fetching', data)
    }

    const onError = (error) => { 
        console.log('Perform side effect after encountering error', error)
    }

    const { isLoading, data, error, isFetching, } = useSuperHeroesData(onSuccess, onError)

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
        <div className='mt-5 mb-5'>
            <input
                className='border border-gray-700 p-3'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='border border-gray-700 p-3 ml-5' 
                type='text'
                value={alterEgo}
                onChange={(e) => setAlterEgo(e.target.value)}
            />
            <button 
                onClick={handleAddHeroClick}
                className='border border-gray-700 p-3 ml-5' 
            >
            Add Hero
            </button>
        </div>
        {/* <button className='border-2 border-black' onClick={refetch}>Fetch Heroes</button> */}

        {data?.data.map((hero) => {
            return (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            )  
         })}

        {/* {
            data.map(heroName => { 
                return <div key={heroName}>{heroName}</div>
            })
        } */}
    </div>
  )
}

export default RQSuperHeroes