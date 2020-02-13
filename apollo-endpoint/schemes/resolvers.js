const expractRelateProperty = async (id, relation, model) => {
  const completedScheme = await model.getRelatedScheme(id, [relation]);
  return completedScheme[relation];
};

const resolvers = {
  Query: {
    getSchemeById: async (parent, { id }, { dataSources }) => {
      return dataSources.schemesModel.getScheme(id);
    },
    getRootSchemes: async (parent, args, { dataSources }) => {
      const foundSchemes = await dataSources.schemesModel.getSchemes();
      return foundSchemes.filter(({ parentId }) => !parentId);
    }
  },
  Scheme: {
    objects: ({ id }, args, { dataSources }) => {
      return expractRelateProperty(id, "objects", dataSources.schemesModel);
    },
    services: ({ id }, args, { dataSources }) => {
      return expractRelateProperty(id, "services", dataSources.schemesModel);
    },
    childLayers: ({ id }, args, { dataSources }) => {
      return expractRelateProperty(id, "childLayers", dataSources.schemesModel);
    }
  },
  SchemeObject: {
    format: object => {
      return object["objectFormat"];
    }
  },
  SchemeService: {
    options: service => {
      return service["serviceOptions"];
    }
  }
};

module.exports = {
  resolvers
};
