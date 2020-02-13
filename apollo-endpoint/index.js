const { ApolloServer, gql } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");

const schemes = require("./schemes");

const typeDef = gql`
  scalar JSON

  type Query
`;

const resolvers = {
  JSON: GraphQLJSON
};

const server = new ApolloServer({
  typeDefs: [typeDef, schemes.typeDef],
  resolvers: [resolvers, schemes.resolvers],
  dataSources: () => {
    return {
      schemesModel: new schemes.Model()
    };
  }
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
