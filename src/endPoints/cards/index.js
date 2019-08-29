import { fetchApi } from "../api";
import { subDomain } from "./config";
import { isObjectWithKeys, isLastIndex, filterObjectKeys } from "../utls";
import QueryBuilder from "../queryBuilder";

export default class Cards extends QueryBuilder {
  static optionParams = optionParams;
  static searchParams = searchParams;

  // /cards
  static async all(options) {
    const validOptions = ["page", "format", "pretty"];

    const optionParams = options
      ? filterObjectKeys(options, optionParams)
      : null;
    const queryString = new QueryBuilder({ searchParams: null, optionParams })
      .urlString;

    return await fetchApi({
      endPoint: `${subDomain}${queryString}`
    });
  }

  // /cards/search
  static async search(params, options) {
    const validOptions = [
      "unique",
      "order",
      "dir",
      "include_extras",
      "include_multiligual",
      "page",
      "format"
    ];
    const validSearch = [
      "name",
      "color",
      "identity",
      "type",
      "oracle",
      "mana",
      "power",
      "toughness",
      "loyalty",
      "is",
      "include",
      "rarity",
      "in",
      "set",
      "number",
      "block",
      "format",
      "usd",
      "tix",
      "eur",
      "art",
      "flavor",
      "watermark",
      "boarder",
      "frame",
      "game",
      "not",
      "language"
    ];

    const optionParams = options
      ? filterObjectKeys(options, optionParams)
      : null;
    const searchParams = params ? filterObjectKeys(params, validSearch) : null;
    const queryString = new QueryBuilder({ searchParams, optionParams })
      .urlString;

    return await fetchApi({
      endPoint: `${subDomain}/search${queryString}`
    });
  }

  // /cards/named
  static async named(name, options) {
    const validOptions = [
      "exact",
      "fuzzy",
      "set",
      "format",
      "face",
      "version",
      "pretty"
    ];
    const optionParams = options
      ? filterObjectKeys(options, optionParams)
      : null;
    const queryString = new QueryBuilder({ searchParams: name, optionParams })
      .urlString;

    return await fetchApi({
      endPoint: `${subDomain}/named${queryString}`
    });
  }

  // /cards/autocomplete
  static async autocomplete(params, options) {}

  // /cards/random
  static async random() {}

  // /cards/collection
  static async collection() {}

  // /cards/:code/:number(/:lang)
  static async singleCard() {}

  // /cards/multiverse/:id
  static async singleCard() {}

  // /cards/mtgo/:id
  static async singleCard() {}

  // /cards/arena/:id
  static async singleCard() {}

  // /cards/tcgplayer/:id
  static async singleCard() {}

  // /cards/scryfall/:id
  static async singleCard() {}
}
