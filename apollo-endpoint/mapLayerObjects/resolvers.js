const { withFilter } = require("apollo-server-express");

const MAP_LAYER_OBJECTS_UPDATED = "MAP_LAYER_OBJECTS_UPDATED";

const resolvers = {
  Query: {
    getMapLayers: async (parent, args, { dataSources }) =>
      dataSources.mapLayerObjectsModel.getLayers(),
    getMapLayerObjects: async (parent, { layerId }, { dataSources }) =>
      dataSources.mapLayerObjectsModel.getLayerObjects(layerId)
  },

  Subscription: {
    mapLayerObjectsUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([MAP_LAYER_OBJECTS_UPDATED]),
        (payload, variables) => payload.layerId === variables.layerId
      )
    }
  }
};

module.exports = {
  resolvers
};
