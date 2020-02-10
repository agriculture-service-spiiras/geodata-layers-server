const { ApolloServer, gql } = require("apollo-server-express");
const schemes = require("./schemes");

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, schemes.typeDef],
  resolvers: [schemes.resolvers]
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
