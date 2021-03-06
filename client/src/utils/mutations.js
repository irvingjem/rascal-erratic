//import gql from 'graphql-tag';
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_MINT = gql`
  mutation savedMint($mintData: MintInput!) {
    savedMint(mintData: $mintData) {
      _id
      username
      email
      savedMint {
        _id
        name
        description
        symbol
        image
        launchDatetime
        size
        price
        featured
      }
    }
  }
`;

export const REMOVE_MINT = gql`
  mutation removeMint($mintId: ID!) {
    removeMint(mintId: $mintId) {
      _id
      username
      email
      mintCount
      savedMint {
        _id
        name
        description
        symbol
        image
        launchDateTime
        size
        price
        featured
      }
    }
  }
`;
