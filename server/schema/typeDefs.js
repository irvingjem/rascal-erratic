const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    mintCount: Int
    savedMint: [Mint]
  }
  type Mint {
    _id: ID
    description: String
    featured: Boolean
    image: String
    launchDatetime: String
    name: String!
    price: Float
    size: Int
    symbol: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input MintInput {
    _id: ID
    description: String
    featured: Boolean
    image: String
    launchDatetime: String
    name: String!
    price: Float
    size: Int
    symbol: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedMint(mintData: MintInput!): User
    removeMint(_id: ID!): User
  }
`;

module.exports = typeDefs;
