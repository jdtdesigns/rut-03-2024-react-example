import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GET_SINGLE_POST } from '../graphql/queries'


function SinglePost() {
  const params = useParams()
  const { loading, data, error } = useQuery(GET_SINGLE_POST, {
    variables: {
      post_id: params.id
    }
  })

  return (
    <div>
      <h1>{data?.getPost.title}</h1>
      <p>{data?.getPost.body}</p>
      <p>_id: {data?.getPost._id}</p>
    </div>
  )
}

export default SinglePost