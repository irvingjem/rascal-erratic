import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      mintCount
      savedMint{
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


// SAVED NFTS array inside of "me"
