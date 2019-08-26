import { fetchApi } from "../api";
import QueryBuilder from "../queryBuilder";

const subDomain = "/cards";

export default class Cards {
  // /cards
  static async all() {}

  // /cards/search
  static async search() {}

  // /cards/named
  static async named(name, options = {}) {
    const { exact, fuzzy, set, format, face, version, pretty } = options;
    const queryString = new QueryBuilder(name, {
      exact,
      fuzzy,
      set,
      format,
      face,
      version,
      pretty
    }).urlString;

    return await fetchApi({
      endPoint: `${subDomain}/named${queryString}`
    });
  }

  // /cards/autocomplete
  static async autocomplete() {}

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
