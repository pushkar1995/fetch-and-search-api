import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

const RQSuperHeroDetails = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  if (error) {
      return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h2>RQ Super Hero Details Page!!</h2>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}

export default RQSuperHeroDetails