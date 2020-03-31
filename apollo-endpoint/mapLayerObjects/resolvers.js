// const { withFilter } = require("apollo-server-express");

// const MAP_LAYER_OBJECTS_UPDATED = "MAP_LAYER_OBJECTS_UPDATED";

const resolvers = {
  MapLayer: {
    objectsGeodata: ({ dataSource }, args, { dataSources }) => {
      return dataSources.layerGeodataModel.getLayerObjects(dataSource);
    }
  }
  // Subscription: {
  //   mapLayerObjectsUpdated: {
  //     subscribe: withFilter(
  //       () => pubsub.asyncIterator([MAP_LAYER_OBJECTS_UPDATED]),
  //       (payload, variables) => payload.layerId === variables.layerId
  //     )
  //   }
  // }
};

module.exports = {
  resolvers
};
