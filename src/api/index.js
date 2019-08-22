import { ROOT, defaultHeaders } from "./config";

const handleServerResponse = response => {
  // debugger;
  if (!response.ok) {
    // debugger;
    throw new Error(response.status);
  } else {
    return response;
  }
};

// const parseResponse = response => response.json();

export const fetchApi = (
  endPoint,
  payload = {},
  method = "GET",
  headers = {}
) => {
  const options = {
    method,
    body: "",
    headers: {
      ...headers,
      ...defaultHeaders
    }
  };
  if (Object.keys(payload).length > 0) {
    options.body = JSON.stringify(payload);
  }

  return fetch(`${ROOT}${endPoint}`, options).then(handleServerResponse);
};
