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
  mutation saveMint($mintData: String!) {
    saveMint(mintData: $mintData) {
      _id
      username
      email
      saveMint {
        symbol
        name
        description
        image
        price
        size
        launchDateTime
      }
    }
  }
`;

export const REMOVE_MINT = gql`
  mutation removeMint($mintId: ID!) {
    removeMint(mintId: $mintId) {
      # _id
      username
      email
      mintCount
      saveMints {
        symbol
        name
        description
        featured
        edition
        image
        price
        size
        launchDatetime
      }
    }
  }
`;
