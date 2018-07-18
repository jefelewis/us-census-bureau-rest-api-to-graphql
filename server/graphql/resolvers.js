// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getFunction: async (parent, args) => {
      const response = await
      fetch(``);
      return response.json();
    },
  }
};

// Exports
export default RESOLVERS;