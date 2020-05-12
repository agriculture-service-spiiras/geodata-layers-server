const { withFilter } = require("apollo-server");

const VEHICLE_UPDATED = "VEHICLE_UPDATED";

const resolvers = {
  Query: {
    getAerialVehicle: (_, { id }, { dataSources }) =>
      dataSources.vehiclesModel.getVehicle(id),
    getAerialVehicles: (_, args, { dataSources }) =>
      dataSources.vehiclesModel.getVehicles(),
    getVehicleLayerScheme: (_, args, { dataSources }) =>
      dataSources.vehiclesModel.getLayerScheme(),
  },
  Mutation: {
    addVehicleTask: (_, { vehicle, task }, { dataSources }) =>
      dataSources.vehiclesModel.addVehicleTask(vehicle, task),
    cancelVehicleTask: async (
      _,
      { vehicle, task },
      { eventBus, dataSources }
    ) => {
      const updatedVehicle = await dataSources.vehiclesModel.cancelVehicleTask(
        vehicle,
        task
      );
      eventBus.publish(VEHICLE_UPDATED, updatedVehicle);
      return updatedVehicle;
    },
  },
  Subscription: {
    updatedVehicle: {
      resolve: (payload) => {
        return payload;
      },
      subscribe: withFilter(
        (_, args, { eventBus }) => eventBus.asyncIterator([VEHICLE_UPDATED]),
        ({ id: updatedVehicle }, { id: observedVehicle }) =>
          updatedVehicle === observedVehicle
      ),
    },
  },
};

module.exports = {
  resolvers,
};
