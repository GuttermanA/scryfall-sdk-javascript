export default class QueryBuilder {
  constructor({ search, options }) {
    this.searchString = this.search(search);
    this.optionsString = this.options(options);
    this.queryString = build();
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

  options(params) {}

  build() {
    return new URLSearchParams(this.optionsString).append(this.searchString);
  }

  searchBuilder() {}
}
