import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';


const options = {
  endpoint: "/graphql",
  playground: "/playground",
  port: 8000,
  subscriptions: "/subscriptions",
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, ({ port }) => console.log(`Server is running on localhost:${port}`));
