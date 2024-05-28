import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      _id
      body
      title
    }
  }
`

export const GET_SINGLE_POST = gql`
  query GetPost($post_id: String!) {
    getPost(post_id: $post_id) {
      _id
      body
      title
    }
  }
`