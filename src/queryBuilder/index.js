import { isObjectWithKeys, isLastIndex, filterObjectKeys } from "../utils";

export default class QueryBuilder {
  constructor({ searchParams, optionParams }) {
    this.searchString = this.searchBuilder(searchParams);
    this.optionsString = this.optionsBuilder(optionParams);
    this.urlString = this.build();
  }

  search({
    name,
    color,
    identity,
    type,
    oracle,
    mana,
    power,
    toughness,
    loyalty,
    is,
    include,
    rarity,
    inn,
    set,
    number,
    block,
    format,
    usd,
    tix,
    eur,
    art,
    flavor,
    watermark,
    boarder,
    frame,
    game,
    not,
    language
  }) {}

  searchBuilder(params) {
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

  optionsBuilder(params) {
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

  build() {
    const builder = this.optionsString
      ? new URLSearchParams(this.optionsString)
      : new URLSearchParams("");

    this.searchString && builder.append("q", this.searchString);

    return "?".concat(builder.toString());
  }

  paramBuilder(field, value, operator = "=") {
    const query = field === "name" ? value : `${queryField}${operator}${value}`;
    const param = {};
    return (param[field] = query);
  }
}
