const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getMapPosition: MapPosition!
    getMapSubstrate: MapSubstrate!
  }

  type MapPosition {
    origin: CoordinatesScalar!
    bounds: CoordinatesScalar!
  }

  type MapSubstrate {
    service: String!
    options: JSON!
  }
`;

module.exports = {
  typeDef
};
