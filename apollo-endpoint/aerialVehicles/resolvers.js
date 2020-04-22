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
      const taskList = await dataSources.vehiclesModel.cancelVehicleTask(
        vehicle,
        task
      );
      eventBus.publish(VEHICLE_UPDATED);
      return taskList;
    },
  },
  Subscription: {
    vehicleUpdated: {
      subscribe: ({ eventBus }) => {
        return null;
      },
    },
  },
};

module.exports = {
  resolvers,
};
