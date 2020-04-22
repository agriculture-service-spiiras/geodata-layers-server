const { gql } = require("apollo-server-express");

const typeDef = gql`
  extend type Query {
    getAerialVehicle(id: ID!): AerialVehicle
    getAerialVehicles: [AerialVehicle]!
    getVehicleLayerScheme: String!
  }

  extend type Mutation {
    addVehicleTask(vehicle: ID!, task: JSON!): VehicleTask
    cancelVehicleTask(vehicle: ID!, task: ID!): AerialVehicle!
  }

  extend type Subscription {
    updatedVehicle(id: ID!): AerialVehicle!
  }

  type AerialVehicle {
    id: ID!
    tasks: [VehicleTask]!
  }

  type VehicleTask {
    id: ID!
    name: String
    steps: [StepPoint]!
  }

  type StepPoint {
    id: ID!
    coordinates: Coordinates!
    stopTime: String
  }

  type Coordinates {
    lat: Float!
    lng: Float!
  }
`;

module.exports = {
  typeDef,
};
