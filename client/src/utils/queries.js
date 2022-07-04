import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      mintCount
      saveMint {
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
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
  }
}
`;

// SAVED NFTS array inside of "me"
