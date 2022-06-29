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
        edition
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
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

// SAVED NFTS array inside of "me"
