const { ApolloServer, gql, PubSub } = require("apollo-server-express");
const GraphQLJSON = require("graphql-type-json");
const {
  FeatureCollectionObject,
  CoordinatesScalar,
} = require("graphql-geojson");

const mapOptions = require("./mapOptions");
const mapLayers = require("./mapLayers");
const mapLayerSchemes = require("./mapLayerSchemes");
const mapLayerObjects = require("./mapLayerObjects");
const aerialVehicles = require("./aerialVehicles");

const {
  LayerSchemesModel,
  LayerGeodataModel,
  VehiclesModel,
} = require("./dataSources");

const eventBus = new PubSub();

const typeDef = gql`
  scalar JSON

  scalar FeatureCollection
  scalar CoordinatesScalar

  type Query
  type Mutation
  type Subscription
`;

const resolvers = {
  JSON: GraphQLJSON,
  FeatureCollection: FeatureCollectionObject,
  CoordinatesScalar: CoordinatesScalar,
};

const server = new ApolloServer({
  typeDefs: [
    typeDef,
    mapOptions.typeDef,
    mapLayers.typeDef,
    mapLayerSchemes.typeDef,
    mapLayerObjects.typeDef,
    aerialVehicles.typeDef,
  ],
  resolvers: [
    resolvers,
    mapOptions.resolvers,
    mapLayers.resolvers,
    mapLayerSchemes.resolvers,
    mapLayerObjects.resolvers,
    aerialVehicles.resolvers,
  ],
  context: () => ({
    eventBus,
  }),
  dataSources: () => ({
    mapOptionsModel: new mapOptions.Model(),
    layerGeodataModel: new LayerGeodataModel(),
    layerSchemesModel: new LayerSchemesModel(),
    vehiclesModel: new VehiclesModel(),
  }),
});

module.exports = server;
