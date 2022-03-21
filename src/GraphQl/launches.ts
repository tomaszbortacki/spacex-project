import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query launches($offset: Int!) {
    launches(limit: 10, offset: $offset) {
      launch_success
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
