const { ApolloServer, gql } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const {
  FeatureCollectionObject,
  CoordinatesScalar
} = require("graphql-geojson");

const mapOptions = require("./mapOptions");
const schemes = require("./schemes");
const objects = require("./objects");

const typeDef = gql`
  scalar JSON

  scalar FeatureCollection
  scalar CoordinatesScalar

  type Query
  type Subscription
`;

const resolvers = {
  JSON: GraphQLJSON,
  FeatureCollection: FeatureCollectionObject,
  CoordinatesScalar: CoordinatesScalar
};

const server = new ApolloServer({
  typeDefs: [typeDef, mapOptions.typeDef, schemes.typeDef, objects.typeDef],
  resolvers: [
    resolvers,
    mapOptions.resolvers,
    schemes.resolvers,
    objects.resolvers
  ],
  dataSources: () => ({
    mapOptionsModel: new mapOptions.Model(),
    mapLayerSchemesModel: new schemes.Model(),
    mapLayerObjectsModel: new objects.Model()
  })
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
