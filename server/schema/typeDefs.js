const { gql } = require("apollo-server-express");
//    mintCount: Int saveMint: [Mint]


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedMint: [Mint]
  }
  type Mint {
    name: String!
    description: String
    image: String
    symbol: String
    launchDateTime: String
    size: String
    price: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  input MintInput {
    name: String!
    description: String
    image: String
    symbol: String
    launchDateTime: String
    size: String
    price: Int
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMint(mintData: String!): User
    removeMint(mintName: String!): User
  }
`;

module.exports = typeDefs;
