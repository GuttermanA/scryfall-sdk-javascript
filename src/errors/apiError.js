import { isObjectWithKeys } from "../utils";

export default class ApiError extends Error {
  constructor(params) {
    super(ApiError.initialize(params));
    this.name = "ApiErrors";
  }

  static initialize(params) {
    if (isObjectWithKeys(params)) {
      const { code, status, details } = params;
      return `${status} - ${code}: ${details}`;
    } else if (params instanceof String) {
      return params;
    }
  }
}
