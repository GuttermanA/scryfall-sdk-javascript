export interface AllParams {
  page?: number;
  format?: string;
  pretty?: boolean;
}

export interface SearchParams {
  q: string; //query
  unique?: "cards" | "art" | "prints"; //in certain params
  order?:
    | "name"
    | "set"
    | "released"
    | "rarity"
    | "color"
    | "usd"
    | "tix"
    | "eur"
    | "cmc"
    | "power"
    | "toughness"
    | "edhrec"
    | "artist"; //in certains params
  dir?: "auto" | "asc" | "desc"; //direction
  include_extras?: boolean;
  include_multiligual?: boolean;
  include_variations?: boolean;
  page?: number;
  format?: string;
  pretty?: boolean;
}

interface NamedParams {
  set?: string;
  format?: string;
  face?: string;
  version?: string;
  pretty?: boolean;
}

export interface NamedParamsExact extends NamedParams {
  exact: string;
}

export interface NamedParamsFuzzy extends NamedParams {
  fuzzy: string;
}

export interface AutoCompleteParams {
  q: string;
  format?: string;
  pretty?: boolean;
}

export interface RandomParams {
  q?: string;
  format?: string;
  face?: string;
  version?: string;
  pretty?: boolean;
}

interface CardIdentifier {}

export interface CollectionParams {
  indentifiers: CardIdentifier[];
  pretty?: boolean;
}
