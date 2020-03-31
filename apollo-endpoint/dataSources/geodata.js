const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("config");

class GeodataAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.routes.mapLayerObjects;
  }

  getLayers() {
    return this.get("objects-geodata");
  }

  async getLayerObjects(layerId) {
    const data = await this.get(`objects-geodata/${layerId}`);

    if (!data) {
      return null;
    }

    const { objects } = data;
    return objects;
  }

  updateLayerObjects(layerObjects) {
    const updatedLayer = mockUpdatedLayer;
    return updatedLayer;
  }
}

module.exports = GeodataAPI;
