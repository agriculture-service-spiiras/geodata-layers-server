const { gql } = require("apollo-server-express");

const typeDef = gql`
  type Scheme {
    name: String
  }

  extend type Query {
    schemes: [Scheme]
  }
`;

module.exports = {
  typeDef
};
