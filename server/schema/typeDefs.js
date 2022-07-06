const { gql } = require("apollo-server-express");
//    mintCount: Int saveMint: [Mint]


const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  email: String
  mintCount: Int
  savedMint: [Mint]
}
type Mint {
  name: String!
  description: String
  symbol: String
  image: String
  launchDatetime: String
  size: Int
  price: Int
  featured: Boolean
}
type Auth {
  token: ID!
  user: User
}
input MintInput {
  name: String!
  description: String
  symbol: String
  image: String
  launchDatetime: String
  size: Int
  price: Int
  featured: Boolean
}
type Query {
  me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  savedMint(mintData: MintInput!): User
  removeMint(mintName: String!): User
}
`;


module.exports = typeDefs;
