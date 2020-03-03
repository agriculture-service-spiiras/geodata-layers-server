const { ApolloServer, gql } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const {
  FeatureCollectionObject,
  CoordinatesScalar
} = require("graphql-geojson");

const mapOptions = require("./mapOptions");
const mapLayerSchemes = require("./mapLayerSchemes");
const mapLayerObjects = require("./mapLayerObjects");

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
  typeDefs: [
    typeDef,
    mapOptions.typeDef,
    mapLayerSchemes.typeDef,
    mapLayerObjects.typeDef
  ],
  resolvers: [
    resolvers,
    mapOptions.resolvers,
    mapLayerSchemes.resolvers,
    mapLayerObjects.resolvers
  ],
  dataSources: () => ({
    mapOptionsModel: new mapOptions.Model(),
    mapLayerSchemesModel: new mapLayerSchemes.Model(),
    mapLayerObjectsModel: new mapLayerObjects.Model()
  })
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
