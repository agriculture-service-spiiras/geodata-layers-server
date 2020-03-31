const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapLayer(id: ID!): MapLayer
    getMapLayers: [MapLayer]!
  }

  type MapLayer {
    id: ID!
    name: String!
    parentId: ID
  }
`;

module.exports = {
  typeDef
};
