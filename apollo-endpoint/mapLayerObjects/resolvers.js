const { PubSub } = require("apollo-server");

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";

const resolvers = {
  Query: {
    getMapLayerObjects: async (parent, { layer }, { dataSources }) =>
      dataSources.mapLayerObjectsModel.getLayerObjects(layer)
  },

  Subscription: {
    mapLayerObjects: {
      subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
  }
};

module.exports = {
  resolvers
};
