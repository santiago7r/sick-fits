import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import React from 'react'

const SINGLE_ITEM_QUERY = gql`
    query {
        Product(where: {
            id : "66f2e94e6766677a359ea639"
        }) {
            name
            price
            description
        }
    }
`;

export default function SingleProduct({ query }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  return (
    <p>
      This is a single product {query.id}
    </p>
  )
}
