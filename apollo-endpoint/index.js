const { ApolloServer, gql, PubSub } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const {
  FeatureCollectionObject,
  CoordinatesScalar
} = require("graphql-geojson");

const mapOptions = require("./mapOptions");
const mapLayers = require("./mapLayers");
const mapLayerSchemes = require("./mapLayerSchemes");
const mapLayerObjects = require("./mapLayerObjects");

const { LayerSchemesModel, LayerGeodataModel } = require("./dataSources");

const eventBus = new PubSub();

const typeDef = gql`
  scalar JSON

  scalar FeatureCollection
  scalar CoordinatesScalar

  type Query
  # type Subscription
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
    mapLayers.typeDef,
    mapLayerSchemes.typeDef,
    mapLayerObjects.typeDef
  ],
  resolvers: [
    resolvers,
    mapOptions.resolvers,
    mapLayers.resolvers,
    mapLayerSchemes.resolvers,
    mapLayerObjects.resolvers
  ],
  context: () => ({
    eventBus
  }),
  dataSources: () => ({
    mapOptionsModel: new mapOptions.Model(),
    layerGeodataModel: new LayerGeodataModel(),
    layerSchemesModel: new LayerSchemesModel()
  })
});

module.exports = ({ app, path }) => {
  server.applyMiddleware({ app, path });
};
