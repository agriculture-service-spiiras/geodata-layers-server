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
    const objects = await this.get(`objects-geodata/${layerId}`);
    return objects;
  }

  updateLayerObjects(layerObjects) {
    const updatedLayer = mockUpdatedLayer;
    return updatedLayer;
  }
}

module.exports = GeodataAPI;
