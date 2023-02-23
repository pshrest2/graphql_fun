const fetchGraphqlQuery = async (operation, variables) => {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((error) => error.message).join("\n"));
  }
  return json;
};

export default fetchGraphqlQuery;
