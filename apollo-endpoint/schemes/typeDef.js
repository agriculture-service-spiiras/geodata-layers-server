const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapSchemeById(id: ID!): MapScheme
    getMapRootSchemes: [MapScheme]!
  }

  type MapScheme {
    id: ID!
    name: String!
    objects: [MapSchemeObject]!
    services: [MapSchemeService]!
    childLayers: [MapScheme]!
  }

  type MapSchemeObject {
    id: ID!
    name: String!
    format: JSON
  }

  type MapSchemeService {
    id: ID!
    name: String!
    options: JSON
  }
`;

module.exports = {
  typeDef
};
