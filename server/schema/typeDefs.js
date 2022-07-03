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
    mintName: ID!
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
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(mintData: ID!): User
    removeBook(mintName: ID!): User
  }
`;

module.exports = typeDefs;
