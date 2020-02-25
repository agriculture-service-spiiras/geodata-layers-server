const resolvers = {
  Query: {
    getMapPosition: async (parent, args, { dataSources }) => {
      return dataSources.mapOptionsModel.getPosition();
    },
    getMapSubstrate: async (parent, args, { dataSources }) => {
      return dataSources.mapOptionsModel.getMapSubstrate();
    }
  }
};

module.exports = {
  resolvers
};
