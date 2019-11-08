export const typeDefs = `
  type User {
    name: String
    age: Int
  }

  type Query {
    hello(name: String): String!
    helloUser(name: String, age: Int): User
  }
`;