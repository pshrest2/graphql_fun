// relay.config.js
module.exports = {
  src: "./",
  language: "javascript",
  schema: "./db/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
