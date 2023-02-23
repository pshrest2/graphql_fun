import { graphql } from "babel-plugin-relay/macro";

export default graphql`
  query artistsQuery {
    artists {
      id
      firstName
    }
  }
`;
