const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("config");

const mockPosition = {
  origin: [46.65470694682879, 6.5381353022610575],
  bounds: [
    [46.65470694682879, 6.5381353022610575],
    [46.65708474025545, 6.5433412972712395]
  ]
};

const mockSubstrate = {
  service: "wms",
  crs: "3857",
  options: {
    url: "http://192.168.0.130:14002/geoserver/wms",
    layers: "namespace:tiles",
    tiled: "true"
  }
};

class Model extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.routes.schemes;
  }

  async getPosition() {
    const foundPosition = mockPosition;
    return foundPosition;
  }
  async getMapSubstrate() {
    const foundSubstrate = mockSubstrate;
    return foundSubstrate;
  }
}

module.exports = Model;
