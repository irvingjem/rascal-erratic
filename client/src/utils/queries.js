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

// SAVED NFTS array inside of "me"
