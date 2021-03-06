import { ROOT, defaultHeaders, timeoutMS } from "./config";
import {
  timeout,
  readContentType,
  isObjectWithKeys,
  keyWithValueExists
} from "../utils";
import { FetchParams, Options } from "./interfaces";
import { ApiError } from "../errors";
import "regenerator-runtime/runtime";

const handleServerResponse = async response => {
  const result = await parseResponse(response);
  if (keyWithValueExists({ object: result, key: "object", value: "error" })) {
    throw new ApiError(result);
  }

  return result;
};

const parseResponse = async response => {
  try {
    const contentType = readContentType(response.headers);
    if (contentType.includes("text")) {
      return await response.text();
    }
    if (contentType.includes("json")) {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const fetchApi = async (params: FetchParams) => {
  const { endPoint, method, payload, headers } = params;
  const options: Options = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers
    }
  };

  if (isObjectWithKeys(payload)) {
    options.body = JSON.stringify(payload);
  }

  await timeout(timeoutMS);

  return fetch(`${ROOT}${endPoint}`, options as RequestInit).then(
    handleServerResponse
  );
};
