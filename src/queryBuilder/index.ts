import { isObjectWithKeys } from "../utils";
import { ConstructorParams, MetadataParams } from "./interfaces";

export default class QueryBuilder {
  readonly searchString: string;
  readonly optionsString: string;
  readonly urlString: string;

  constructor(params: ConstructorParams) {
    this.searchString = this.searchBuilder(params.search);
    this.optionsString = this.optionsBuilder(params.options);
    this.urlString = this.build();
  }

  searchBuilder(params: object) {
    const result = "";
    for (const field in params) {
      result.concat(field).concat(params[field]);
    }

    return (result.length > 0 && result) || null;
  }

  optionsBuilder(params) {
    const builder = new URLSearchParams("");

    if (isObjectWithKeys(params)) {
      for (const name in params) {
        builder.append(name, params[name]);
      }
    } else {
      throw new Error("Params must be an object containing key value pairs");
    }

    const result = builder.toString();

    return (result.length > 0 && result) || null;
  }

  build() {
    const builder = this.optionsString
      ? new URLSearchParams(this.optionsString)
      : new URLSearchParams("");

    this.searchString && builder.append("q", this.searchString);

    return "?".concat(builder.toString());
  }
}
