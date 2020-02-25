const { ApolloServer, gql } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const {
  FeatureCollectionObject,
  CoordinatesScalar
} = require("graphql-geojson");

const mapOptions = require("./mapOptions");
const schemes = require("./schemes");

const typeDef = gql`
  scalar JSON

  scalar FeatureCollection
  scalar CoordinatesScalar

  type Query
`;

const resolvers = {
  JSON: GraphQLJSON,
  FeatureCollection: FeatureCollectionObject,
  CoordinatesScalar: CoordinatesScalar
};

const server = new ApolloServer({
  typeDefs: [typeDef, mapOptions.typeDef, schemes.typeDef],
  resolvers: [resolvers, mapOptions.resolvers, schemes.resolvers],
  dataSources: () => ({
    mapOptionsModel: new mapOptions.Model(),
    schemesModel: new schemes.Model()
  })
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
