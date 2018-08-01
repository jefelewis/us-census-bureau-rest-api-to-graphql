// Imports: Node Fetch
import axios from 'axios';

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/us-census-bureau-rest-api-to-graphql/config/config.js';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // UNITED STATES POPULATION
    // Get 2016 Population for United States
    get2016PopulationForUnitedStates: (parent, args) => {
      return axios.get(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=us:*&key=${APIKEY}`)
      .then((response) => {
        // modifyArrayResponse((response) => {
        //   const keys = response[0];
        //   const transformedData = [];
        //   for (let i = 1; i < response.length; i++) {
        //     const obj = {};
        //     keys.forEach((key, index) => obj[key] = response[i][index]);
        //     transformedData.push(obj);
        //   }
        //   let response = transformedData;
        // })
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2015 Population for United States
    get2015PopulationForUnitedStates: (parent, args) => {
      return axios.get(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=us:*&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2014 Population for United States
    get2014PopulationForUnitedStates: (parent, args) => {
      return axios.get(`https://api.census.gov/data/2014/pep/natstprc18?get=STNAME,POPEST18PLUS2014&for=us:*&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2013 Population for United States
    get2013PopulationForUnitedStates: (parent, args) => {
      return axios.get(`https://api.census.gov/data/2013/pep/natstprc?get=STNAME,POP&for=state:*&DATE=6&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },


    // // UNITED STATES POPULATION BY REGION
    // // Get 2016 Population for United States by Region
    // get2016PopulationByRegion: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=region:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error))
    // },
    // // Get 2015 Population for United States by Region
    // get2015PopulationByRegion: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=region:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },



    // // UNITED STATES POPULATION BY DIVISION
    // // Get 2016 Population for United States by Division
    // get2016PopulationByDivision: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=division:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Get 2015 Population for United States by Division
    // get2015PopulationByDivision: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=division:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },



    // UNITED STATES POPULATION BY STATE
    // Get 2016 Population for United States by State
    get2016PopulationByState: async (parent, args) => {
      return axios.get(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=state:*&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2015 Population for United States by State
    get2015PopulationByState: async (parent, args) => {
      return axios.get(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=state:*&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2014 Population for United States by State
    get2014PopulationByState: async (parent, args) => {
      return axios.get(`https://api.census.gov/data/2014/pep/natstprc18?get=STNAME,POPEST18PLUS2014&for=state:*&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    // Get 2013 Population for United States by State
    get2013PopulationByState: async (parent, args) => {
      return axios.get(`https://api.census.gov/data/2013/pep/natstprc?get=STNAME,POP&for=us:00&DATE=6&key=${APIKEY}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },



    // // UNITED STATES POPULATION BY COUNTY
    // // Get 2016 Population for United States by County
    // get2016PopulationByCounty: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=county:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // },
    // // Get 2015 Population for United States by County
    // get2015PopulationByCounty: async (parent, args) => {
    //   return axios.get(`https://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=county:*&key=${APIKEY}`)
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));
    // }
  }
};

// Exports
export default RESOLVERS;