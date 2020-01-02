import gql from "graphql-tag";

export const GET_CIRCUITS = gql`
  {
    Circuit(orderBy: length_desc, first: 10) {
      circuitId
      url
      circuitName
      country
      length
    }
  }
`;

export const GET_DRIVERS = gql`
  {
    Driver(orderBy: wins_desc, first: 10) {
      driverId
      permanentNumber
      code
      url
      givenName
      familyName
      dateOfBirth
      nationality
      wins
      podiums
      salary
      drives: drives_for {
        Constructor {
          name
        }
      }
      positions: finished_race {
        Circuit {
          circuitName
        }
        position
      }
    }
  }
`;
export const GET_CONSTRUCTORS = gql`
  {
    Constructor {
      participated {
        points
      }
      constructorId
      url
      name
      chassis
      nationality
    }
  }
`;
