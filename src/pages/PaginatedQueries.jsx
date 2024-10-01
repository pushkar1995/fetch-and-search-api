import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchColors = (pageNumber) => { 
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, data, error, isError } = useQuery(
    [ 'colors', pageNumber], 
    () => fetchColors(pageNumber)
  )

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  if (isError) {
      return <h2>{error.message}</h2>
  }

  return (
    <div className='flex flex-col m-16'>
      <h1 className='font-bold'>Paginated Queries Page!!!</h1>
      <div>
        {data?.data.map((color) => { 
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          )
        })}
      </div>
      <div className='mt-5'>
        <button
          className='border mr-3 p-3 bg-red-600'  
          onClick={() => setPageNumber((page) => page - 1)} 
          disabled={pageNumber === 1}
          >
          Prev Page
        </button>

        <button
          className='border ml-3 p-3 bg-red-600' 
          onClick={() => setPageNumber((page) => page + 1)} 
          disabled={pageNumber === 4}
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default PaginatedQueries