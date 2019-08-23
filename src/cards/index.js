import { fetchApi } from "../api";

const subDomain = "/cards";

export default class Cards {
  // /cards
  static all() {}

  // /cards/search
  static search() {}

  // /cards/named
  static named() {}

  // /cards/autocomplete
  static autocomplete() {}

  // /cards/random
  static random() {}

  // /cards/collection
  static collection() {}

  // /cards/:code/:number(/:lang)
  static singleCard() {}

  // /cards/multiverse/:id
  static singleCard() {}

  // /cards/mtgo/:id
  static singleCard() {}

  // /cards/arena/:id
  static singleCard() {}

  // /cards/tcgplayer/:id
  static singleCard() {}

  // /cards/scryfall/:id
  static singleCard() {}
}
