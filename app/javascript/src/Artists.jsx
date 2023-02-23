import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import artistsQuery from "./artistsQuery";

export default function Artists({ preloadedQuery }) {
  const data = usePreloadedQuery(artistsQuery, preloadedQuery);
  
  return (
    <div className="artists-container">
      <ul>
        {data.artists.map((artist) => (
          <li key={artist.id}>{artist.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
