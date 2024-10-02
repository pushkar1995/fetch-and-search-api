import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { Fragment } from 'react'

const fetchColors = ({ pageParam = 1  }) => { 
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {
    const { isLoading, data, error, isError, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
        ['colors'],
        fetchColors,
        { 
            getNextPageParam: (_lastPage, pages) => { 
                if (pages.length < 4) { 
                    return pages.length + 1
                } else { 
                    return undefined
                }
            }
        }
    )

    if (isLoading) {
        return <h2>Loading....</h2>
    }
    
    if (isError) {
        return <h2>{error.message}</h2>
    }

  return (
    <div className='flex flex-col m-16'>
        <h1 className='font-bold'>Infinite Queries Page!!!</h1>
        <div>
            {data?.pages.map((group, i) => { 
            return (
                <Fragment key={i}>
                    {group.data.map((color) => (
                        <h2 key={color.id}>
                            {color.id} {color.label} 
                        </h2>
                    ))}
                </Fragment>
            )
            })}
        </div>
        <div>
            <button
                className='border ml-3 mt-6 p-3 bg-red-600'  
                disabled={!hasNextPage} 
                onClick={fetchNextPage}
            >
            Load more
            </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  )
}

export default InfiniteQueries