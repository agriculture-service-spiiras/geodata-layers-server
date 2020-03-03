const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapLayerObjects(layer: ID!): MapLayerObjects!
  }

  extend type Subscription {
    mapLayerObjects(layer: ID!): MapLayerObjects!
  }

  type MapLayerObjects {
    layer: ID!
    objects: FeatureCollection!
  }
`;

module.exports = {
  typeDef
};
