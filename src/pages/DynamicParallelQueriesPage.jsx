/* eslint-disable react/prop-types */
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (heroId) => { 
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}



const DynamicParallelQueriesPage = ({ heroIds }) => {
    const queryResults = useQueries (
        heroIds.map((id) => { 
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
         })
    )
    console.log({ queryResults })
  return <div>DynamicParallelQueriesPage</div>

}

export default DynamicParallelQueriesPage