const extractRelateProperty = async (id, relation, model) => {
  const completedScheme = await model.getRelatedScheme(id, [relation]);
  return completedScheme[relation];
};

const resolvers = {
  MapLayer: {
    objectsSchemes: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(
        id,
        "objects",
        dataSources.layerSchemesModel
      );
    },
    servicesSchemes: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(
        id,
        "services",
        dataSources.layerSchemesModel
      );
    },
    childLayers: ({ id }, args, { dataSources }) => {
      return extractRelateProperty(
        id,
        "childLayers",
        dataSources.layerSchemesModel
      );
    }
  },
  MapLayerSchemeObject: {
    format: object => object["objectFormat"]
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
