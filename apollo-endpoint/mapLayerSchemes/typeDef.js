const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    unfoldMapLayerSchemes(id: ID!): [MapLayer!]
  }

  extend type MapLayer {
    dataSource: String!
    objectsSchemes: [MapLayerSchemeObject]!
    servicesSchemes: [MapLayerSchemeService]!
    childLayers: [MapLayer]!
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
  typeDef,
};
