import { isObjectWithKeys } from "../utils";

export default class QueryBuilder {
  static searchString = null;
  static optionsString = null;
  static urlString = null;
  static subDomain = null;

  static where(params) {
    if (!params) {
      return null;
    }

    const result = "";

    if (isObjectWithKeys(params)) {
      for (const { field, query } in params) {
        result.concat(query);
      }
    } else {
      throw new Error("Params must be an object containing key value pairs");
    }

    return result;
  }

  static options(params) {
    if (!params) {
      return null;
    }

    const builder = new URLSearchParams("");

    if (isObjectWithKeys(params)) {
      for (const name in params) {
        builder.append(name, params[name]);
      }
    } else {
      throw new Error("Params must be an object containing key value pairs");
    }

    return builder.toString();
  }

  static orderBy() {
    const result = "";
    return this.urlString.concat(result);
  }

  static build() {
    const builder = this.optionsString
      ? new URLSearchParams(this.optionsString)
      : new URLSearchParams("");

    this.searchString && builder.append("q", this.searchString);

    return "?".concat(builder.toString());
  }

  static paramBuilder(field, value, operator = "=") {
    const query = field === "name" ? value : `${queryField}${operator}${value}`;
    const param = {};
    return (param[field] = query);
  }
}
