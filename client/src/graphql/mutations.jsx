import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      _id
      body
      title
    }
  }
`