const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("config");

const mockScheme = {
  id: 1,
  name: "test-scheme",
  parentId: null
};

const mockRelatedScheme = {
  id: 1,
  name: "test-scheme",
  parentId: null,
  objects: [
    {
      id: 1,
      name: "circle-shape",
      objectFormat: {
        shape: "circle",
        color: "blue"
      }
    }
  ],
  services: [
    {
      id: 1,
      name: "static",
      serviceOptions: {}
    }
  ],
  childLayers: [
    {
      id: 2,
      name: "test-scheme-child"
    }
  ]
};

class Model extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.routes.mapLayerSchemes;
  }

  async getScheme(id) {
    // return this.get(`schemes/${id}`);
    const foundScheme = mockScheme;
    return foundScheme;
  }

  async getSchemes() {
    // return this.get("schemes");
    const foundSchemes = [mockScheme];
    return foundSchemes;
  }

  async getRelatedScheme(id, relations) {
    const expression = `[${relations.join(", ")}]`;
    // return this.get(`schemes/${id}?$eager=${expression}`);
    const foundScheme = mockRelatedScheme;
    return foundScheme;
  }
}

module.exports = Model;
