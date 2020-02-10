const resolvers = {
  Query: {
    schemes: () => [
      {
        name: "Somebody"
      }
    ]
  }
};

module.exports = {
  resolvers
};
