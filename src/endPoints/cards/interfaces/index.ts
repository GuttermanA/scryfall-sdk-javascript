export interface AllParams {
  page?: number;
  format?: string;
  pretty?: boolean;
}

export interface SearchTerms {
  name?: string;
  color?: ["w" | "u" | "b" | " r" | "g"];
  identity?: string;
  type?: string;
  oracle?: string;
  mana?: string;
  power?: string;
  toughness?: string;
  loyalty?: string;
  is?: string;
  include?: string;
  rarity?: string;
  in?: string;
  set?: string;
  number?: string;
  block?: string;
  format?: string;
  usd?: string;
  tix?: string;
  eur?: string;
  art?: string;
  flavor?: string;
  watermark?: string;
  boarder?: string;
  frame?: string;
  game?: string;
  not?: string;
  language?: string;
}
export interface SearchParams {
  q: SearchTerms; //query
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

interface NamedParamsBase {
  set?: string;
  format?: string;
  face?: string;
  version?: string;
  pretty?: boolean;
}

interface NamedParamsWithExact {
  exact: string;
}

interface NamedParamsWithFuzzy {
  fuzzy: string;
}

export type NamedParams = NamedParamsBase &
  (NamedParamsWithExact | NamedParamsWithFuzzy);

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

interface CardIdentifierId {
  id: string;
}

interface CardIdentfierMTGO {
  mtgoId: number;
}

interface CardIdentfierMultiverse {
  multiverseId: number;
}

interface CardIdentifierName {
  name: string;
}

interface CardIdentifierNameSet {
  name: string;
  set: string;
}

interface CardIdentifierCollectorNumberSet {
  collectorNumber: string;
  set: string;
}

export type CardIdentifier =
  | CardIdentifierId
  | CardIdentfierMTGO
  | CardIdentifierName
  | CardIdentfierMultiverse
  | CardIdentifierNameSet
  | CardIdentifierCollectorNumberSet;

interface IdParamsBase {
  lang?: string;
  format?: "json" | "text" | "image";
  face?: string;
  version?: string;
  pretty?: boolean;
}

interface IdParamsWithCode {
  code: string;
  number: string;
}

export interface IdParamsWithMultiverse {
  id: number;
}

interface IdParamsWithMTGO {
  id: number;
}

interface IdParamsWithArena {
  id: number;
}

interface IdParamsWithTCGPlayer {
  id: number;
}

interface IdParamsWithScryfall {
  id: string;
}

export type IdParams = IdParamsBase &
  (
    | IdParamsWithCode
    | IdParamsWithMultiverse
    | IdParamsWithMTGO
    | IdParamsWithArena
    | IdParamsWithTCGPlayer
    | IdParamsWithScryfall);
