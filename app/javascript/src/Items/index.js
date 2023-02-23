import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import { graphql } from "babel-plugin-relay/macro";

const itemsQuery = graphql`
  query ItemsQuery {
    items {
      id
      imageUrl
      title
      artist {
        firstName
        lastName
      }
    }
  }
`;

export default function Items() {
  const { items } = useLazyLoadQuery(itemsQuery, {});

  return (
    <div className="artists-container">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {`${item.title} by ${item.artist.firstName} ${item.artist.lastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
