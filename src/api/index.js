import { ROOT, defaultHeaders, timeoutMS } from "./config";
import { timeout } from "../utils";

const handleServerResponse = async response => {
  const json = await parseResponse(response);
  const { object, code, status, details } = json;
  if (object === "error") {
    throw new Error(`${status} - ${code}: ${details}`);
  } else {
    return json;
  }
};

const parseResponse = async response => {
  // console.log("Inside parseResponse");
  try {
    return await response.json();
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const fetchApi = async ({
  endPoint,
  payload = {},
  method = "GET",
  headers = {},
  body
}) => {
  const options = {
    method,
    body,
    headers: {
      ...defaultHeaders,
      ...headers
    }
  };

  if (Object.keys(payload).length > 0) {
    options.body = JSON.stringify(payload);
  }

  await timeout(timeoutMS);

  return fetch(`${ROOT}${endPoint}`, options).then(handleServerResponse);
};
