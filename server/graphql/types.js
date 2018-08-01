// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    get2016PopulationForUnitedStates: USPopulation
    get2015PopulationForUnitedStates: USPopulation
    get2014PopulationForUnitedStates: USPopulation
    get2013PopulationForUnitedStates: USPopulation
    get2016PopulationByState: PopulationByState
    get2015PopulationByState: PopulationByState
    get2014PopulationByState: PopulationByState
    get2013PopulationByState: PopulationByState
  }

  type USPopulation {
    POP: String
    GEONAME: String
    us: String
  }


  type PopulationByState {
    country: String
    population: String
    date: String
    usCode: String
  }
`;


// Exports
export default TYPEDEFS;