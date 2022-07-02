import gql from "graphql-tag";

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
  mutation saveUserMint($mintData: MintInput!) {
    saveUserMint(mintData: $mintData) {
      _id
      username
      email
      mintCount
      savedMints {
        symbol
        name
        description
        featured
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
      savedMints {
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
