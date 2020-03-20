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
    const foundScheme = await this.get(`schemes/${id}`);

    if (!foundScheme) {
      return null;
    }

    return foundScheme;
    // const foundScheme = mockScheme;
    // return foundScheme;
  }

  async getSchemes() {
    const { data: foundSchemes } = await this.get("schemes");

    if (!foundSchemes) {
      return [];
    }

    return foundSchemes;
    // const foundSchemes = [mockScheme];
    // return foundSchemes;
  }

  async getRelatedScheme(id, relations) {
    const expression = `[${relations.join(", ")}]`;

    const foundScheme = await this.get(`schemes/${id}?$eager=${expression}`);

    if (!foundScheme) {
      return null;
    }

    return foundScheme;
    // const foundScheme = mockRelatedScheme;
    // return foundScheme;
  }
}

module.exports = Model;
