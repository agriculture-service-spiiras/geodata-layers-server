const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapLayers: [MapLayerObjects]
    getMapLayerObjects(layerId: ID!): MapLayerObjects!
  }

  extend type Subscription {
    mapLayerObjectsUpdated(layerId: ID!): MapLayerObjects
  }

  type MapLayerObjects {
    layerId: ID!
    objects: FeatureCollection!
  }
`;

module.exports = {
  typeDef
};
