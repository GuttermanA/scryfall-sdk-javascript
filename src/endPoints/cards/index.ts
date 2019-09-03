import { fetchApi } from "../../api";
import {
  AllParams,
  SearchParams,
  NamedParams,
  AutoCompleteParams,
  RandomParams,
  CardIdentifier,
  IdParams
} from "./interfaces";
import { subDomain } from "./config";
import QueryBuilder from "../../queryBuilder";

export default class Cards {
  // /cards
  static async all(optionParams: AllParams) {
    const queryString = new QueryBuilder({ options: optionParams }).urlString;
    return await fetchApi({
      endPoint: `${subDomain}${queryString}`
    });
  }

  // /cards/search
  static async search(params: SearchParams) {
    const { q, ...options } = params;
    const queryString = new QueryBuilder({ search: q, options }).urlString;

    return await fetchApi({
      endPoint: `${subDomain}/search${queryString}`
    });
  }

  // /cards/named
  static async named(name: string, options: NamedParams) {
    const queryString = new QueryBuilder({ search: { name }, options })
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
  static async multiverse() {}

  // /cards/mtgo/:id
  static async mtgo() {}

  // /cards/arena/:id
  static async arena() {}

  // /cards/tcgplayer/:id
  static async tcgplayer() {}

  // /cards/scryfall/:id
  static async scryfall() {}
}
