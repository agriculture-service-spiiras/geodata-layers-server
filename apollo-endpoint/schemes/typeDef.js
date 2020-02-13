const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getSchemeById(id: ID!): Scheme!
    getRootSchemes: [Scheme]!
  }

  type Scheme {
    id: ID!
    name: String!
    objects: [SchemeObject]!
    services: [SchemeService]!
    childLayers: [Scheme]!
  }

  type SchemeObject {
    id: ID!
    name: String!
    format: JSON
  }

  type SchemeService {
    id: ID!
    name: String!
    options: JSON
  }
`;

module.exports = {
  typeDef
};
