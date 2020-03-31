const resolvers = {
  Query: {
    getMapLayer: async (parent, { id }, { dataSources }) => {
      return dataSources.layerSchemesModel.getScheme(id);
    },
    getMapLayers: async (parent, {}, { dataSources }) => {
      return dataSources.layerSchemesModel.getSchemes();
    }
  }
};

module.exports = {
  resolvers
};
