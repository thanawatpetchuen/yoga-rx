import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};

const options = {
  endpoint: "/graphql",
  playground: "/playground",
  port: 8000,
  subscriptions: "/subscriptions",
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, ({ port }) => console.log(`Server is running on localhost:${port}`));
