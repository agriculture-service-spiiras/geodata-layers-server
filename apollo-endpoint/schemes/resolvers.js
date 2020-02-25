const extractRelateProperty = async (id, relation, model) => {
  const completedScheme = await model.getRelatedScheme(id, [relation]);
  return completedScheme[relation];
};

const resolvers = {
  Query: {
    getMapLayerSchemeById: async (parent, { id }, { dataSources }) => {
      return dataSources.mapSchemesModel.getScheme(id);
    },
    getMapLayerMainSchemes: async (parent, args, { dataSources }) => {
      const foundSchemes = await dataSources.mapSchemesModel.getSchemes();
      return foundSchemes.filter(({ parentId }) => !parentId);
    }
  },
  MapLayerScheme: {
    objects: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(id, "objects", dataSources.mapSchemesModel);
    },
    services: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(id, "services", dataSources.mapSchemesModel);
    },
    childLayers: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(
        id,
        "childLayers",
        dataSources.mapSchemesModel
      );
    }
  },
  MapLayerSchemeObject: {
    format: object => {
      return object["objectFormat"];
    }
  },
  MapLayerSchemeService: {
    options: service => {
      return service["serviceOptions"];
    }
  }
};

module.exports = {
  resolvers
};
