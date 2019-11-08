import { User } from '../model';

export const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    helloUser: (_, { name: username, age: userage }) => {
      const user = new User(username, userage);
      const { name, age } = user.info;
      return {
        name,
        age
      };
    }
  },
};