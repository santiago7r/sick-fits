import { useQuery } from '@apollo/client'
import gql from 'graphql-tag';
import React from 'react'
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {

  return <SingleProduct id={query.id} />
}
