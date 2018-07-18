// Imports: Node Fetch
import fetch from 'node-fetch';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/us-census-bureau-rest-api-to-graphql/config/config.js';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    get2016PopulationForUnitedStates: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=us:*&key=${APIKEY}`);
      return response.json();
    },
    get2015PopulationForUnitedStates: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=us:*&key=${APIKEY}`);
      return response.json();
    },
    get2014PopulationForUnitedStates: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2014/pep/natstprc18?get=STNAME,POPEST18PLUS2014&for=us:*&key=${APIKEY}`);
      return response.json();
    },
    get2013PopulationForUnitedStates: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2013/pep/natstprc?get=STNAME,POP&for=state:*&DATE=6&key=${APIKEY}`);
      return response.json();
    },
    // get2016PopulationByRegion: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=region:*&key=${APIKEY}`);
    //   return response.json();
    // },
    // get2015PopulationByRegion: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=region:*&key=${APIKEY}`);
    //   return response.json();
    // },
    // get2016PopulationByDivision: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=division:*&key=${APIKEY}`);
    //   return response.json();
    // },
    // get2015PopulationByDivision: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=division:*&key=${APIKEY}`);
    //   return response.json();
    // },
    get2016PopulationByState: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=state:*&key=${APIKEY}`);
      return response.json();
    },
    get2015PopulationByState: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=state:*&key=${APIKEY}`);
      return response.json();
    },
    get2014PopulationByState: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2014/pep/natstprc18?get=STNAME,POPEST18PLUS2014&for=state:*&key=${APIKEY}`);
      return response.json();
    },
    get2013PopulationByState: async (parent, args) => {
      const response = await
      fetch(`https://api.census.gov/data/2013/pep/natstprc?get=STNAME,POP&for=us:00&DATE=6&key=${APIKEY}`);
      return response.json();
    },
    // get2016PopulationByCounty: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=county:*&key=${APIKEY}`);
    //   return response.json();
    // },
    // get2015PopulationByCounty: async (parent, args) => {
    //   const response = await
    //   fetch(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=county:*&key=${APIKEY}`);
    //   return response.json();
    // }
  }
};

// Exports
export default RESOLVERS;