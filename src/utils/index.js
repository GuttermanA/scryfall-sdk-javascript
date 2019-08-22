export const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const queryBuilder = queryObject => {
  const params = new URLSearchParams("");

  if (typeof queryObject === "object" && Object.keys(queryObject).length > 0) {
    for (let name in queryObject) {
      params.append(name, queryObject.name);
    }
  } else {
    throw new Error("Input must be key value pair");
  }

  return params;
};
