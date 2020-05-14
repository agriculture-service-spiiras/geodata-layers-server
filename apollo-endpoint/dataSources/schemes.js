const { flatMap } = require("lodash");
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

  async unfoldScheme(id) {
    const foundScheme = await this.get(`schemes/${id}?$eager=childLayers.^`);

    if (!foundScheme) {
      return null;
    }

    const unfoldedScheme = unfoldSchemeChildren(foundScheme);

    return unfoldedScheme;

    function unfoldSchemeChildren(scheme) {
      return unfold([scheme], []);

      function unfold(schemes, unfolded) {
        if (schemes.length === 0) return unfolded;
        return unfold(
          flatMap(schemes, ({ childLayers }) => childLayers),
          unfolded.concat(schemes)
        );
      }
    }
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
