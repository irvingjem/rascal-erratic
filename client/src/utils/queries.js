import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
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
        launchDatetime
        size
        price
        featured
      }
    }
  }
`;

// SAVED NFTS array inside of "me"
