import { useState } from "react";
import useForm from "../lib/useForm";
import Form from "./styles/Form"
import gql from "graphql-tag";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ){
    createProduct(
      data: {
        name: $name,
        description: $description,
        price: $price,
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      } 
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!'
  });
  return (
    <Form onSubmit={
      e => {
        e.preventDefault()
        console.log(inputs)
      }
    }>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file" 
            id="image" 
            name="image"
            onChange={handleChange}
            />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number" 
            id="price" 
            name="price" 
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
            />
        </label>
        <label htmlFor="price">
          Description
          <textarea
            id="description" 
            name="description" 
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
            />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  )
}
