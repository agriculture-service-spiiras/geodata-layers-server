const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("config");

class SchemesAPI extends RESTDataSource {
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
  }

  async getSchemes() {
    const { data: foundSchemes } = await this.get("schemes");

    if (!foundSchemes) {
      return [];
    }

    return foundSchemes;
  }

  async getRelatedScheme(id, relations) {
    const expression = `[${relations.join(", ")}]`;

    const foundScheme = await this.get(`schemes/${id}?$eager=${expression}`);

    if (!foundScheme) {
      return null;
    }

    return foundScheme;
  }
}

module.exports = SchemesAPI;
