import { isObjectWithKeys, isLastIndex, filterObjectKeys } from "../utls";

export default class QueryBuilder {
  constructor({ searchParams, optionParams }) {
    this.searchString = this.searchBuilder(searchParams);
    this.optionsString = this.optionsBuilder(optionsParams);
    this.urlString = build();
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

  optionsBuilder(params) {
    const builder = new URLSearchParams("");
    search();

    if (isObjectWithKeys(options)) {
      for (const name in queryObject) {
        params.append(name, queryObject[name]);
      }
    } else {
      throw new Error("Params must be an object containing key value pairs");
    }

    return builder.toString();
  }

  build() {
    const builder = new URLSearchParams(this.optionsString).append(
      this.searchString
    );
    return "?".concat(builder.toString());
  }

  paramBuilder(field, value, operator = "=") {
    const query = field === "name" ? value : `${queryField}${operator}${value}`;
    const param = {};
    return (param[field] = query);
  }

  searchBuilder(params) {
    const result = "";
    if (isObjectWithKeys(params)) {
      for (const { field, query } in params) {
        result.concat(query);
      }
      // Object.entries.forEach(([field, query]) => {
      //   result.concat(query);
      //   if (index !== array.length - 1) {
      //     result.concat("+");
      //   }
      // });
    } else {
      throw new Error("Params must be an object containing key value pairs");
    }
    return result;
  }
}
