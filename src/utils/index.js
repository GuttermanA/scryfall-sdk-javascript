export const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const queryBuilder = ({ query = {}, options = {} }) => {
  const params = new URLSearchParams("");

  if (isObjectWithKeys(options)) {
    for (const name in queryObject) {
      params.append(name, queryObject[name]);
    }
  } else {
    throw new Error("Input must be key value pair");
  }

  if (isObjectWithKeys(query)) {
    params.append("");
  }

  return "?".concat(params.toString());
};

export const readContentType = headers => {
  return headers.get("content-type");
};

export const isObject = object => {
  return object != null && object.constructor.name === "Object";
};

export const isObjectWithKeys = object => {
  return isObject(object) && Object.keys(object).length > 0;
};

export const keyExists = (object, key) => {
  return isObject(object) && Object.keys(object).includes(key);
};

export const keyWithValueExists = ({ object, key, value }) => {
  return isObject(object) && keyExists(object, key) && object[key] === value;
};

export const isLastIndex = (array, index) => {
  return Array.isArray(array) && array.length > 0 && index === array.length - 1;
};
