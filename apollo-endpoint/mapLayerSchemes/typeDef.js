const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapLayerSchemeById(id: ID!): MapLayerScheme!
    getMapLayerMainSchemes: [MapLayerScheme!]
  }

  type MapLayerScheme {
    id: ID!
    name: String!
    dataSource: String!
    objects: [MapLayerSchemeObject]!
    services: [MapLayerSchemeService]!
    childLayers: [MapLayerScheme]!
  }

  type MapLayerSchemeObject {
    id: ID!
    name: String!
    dataSourceFeature: String!
    format: JSON
  }

  type MapLayerSchemeService {
    id: ID!
    name: String!
    options: JSON
  }
`;

module.exports = {
  typeDef
};
