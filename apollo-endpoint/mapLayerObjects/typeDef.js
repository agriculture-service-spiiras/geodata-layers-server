const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type MapLayer {
    objectsGeodata: FeatureCollection
  }
  # extend type Subscription {
  #   mapLayerObjectsUpdated(layerId: ID!): FeatureCollection!
  # }
`;

module.exports = {
  typeDef
};
