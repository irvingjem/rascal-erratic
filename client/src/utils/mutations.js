import { gql } from "@apollo/client";

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
  mutation saveMint($mintData: MintInput!) {
    saveMint(mintData: $mintData) {
      _id
      username
      email
      mintCount
      saveMint {
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

export const REMOVE_MINT = gql`
  mutation removeMint($mintId: ID!) {
    removeMint(mintId: $mintId) {
      _id
      username
      email
      mintCount
      saveMint {
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
