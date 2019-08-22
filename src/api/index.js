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
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new SyntaxError(error);
    } else {
      throw new Error(error);
    }
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
