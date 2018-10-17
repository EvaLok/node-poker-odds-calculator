/**
 * Game Variant Specfic Classes
 */
import { Rank } from './Card';

/**
 * GameRules base class
 */
export interface IGame {
  HIGH_CARD: number;
  PAIR: number;
  TWO_PAIRS: number;
  TRIPS: number;
  STRAIGHT: number;
  FLUSH: number;
  FULL_HOUSE: number;
  QUADS: number;
  STRAIGHT_FLUSH: number;

  A6789_STRAIGHT: boolean;
  A2345_STRAIGHT: boolean;

  IS_SHORT_DECK: boolean;

  rank: Rank;
}

export class FullDeckRank extends Rank {
  public all(): number[] {
    return [
      Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN,
      Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING, Rank.ACE
    ];
  }
}

export class FullDeckGame implements IGame {
  public HIGH_CARD: number = 1;
  public PAIR: number = 2;
  public TWO_PAIRS: number = 3;
  public TRIPS: number = 4;
  public STRAIGHT: number = 5;
  public FLUSH: number = 6;
  public FULL_HOUSE: number = 7;
  public QUADS: number = 8;
  public STRAIGHT_FLUSH: number = 9;

  public A6789_STRAIGHT: boolean = false;
  public A2345_STRAIGHT: boolean = true;

  public IS_SHORT_DECK: boolean = false;

  public rank: Rank;

  constructor() {
    this.rank = new FullDeckRank();
  }
}

export class ShortDeckRank extends Rank {
  public all(): number[] {
    return [
      Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN,
      Rank.JACK, Rank.QUEEN, Rank.KING, Rank.ACE
    ];
  }
}

export class SixPlusShortDeckGame implements IGame {

  public HIGH_CARD: number = 1;
  public PAIR: number = 2;
  public TWO_PAIRS: number = 3;
  public STRAIGHT: number = 4;
  public TRIPS: number = 5;
  public FLUSH: number = 7;
  public FULL_HOUSE: number = 6;
  public QUADS: number = 8;
  public STRAIGHT_FLUSH: number = 9;

  public A6789_STRAIGHT: boolean = true;
  public A2345_STRAIGHT: boolean = false;

  public IS_SHORT_DECK: boolean = true;

  public rank: ShortDeckRank;

  constructor() {
    this.rank = new ShortDeckRank();
  }
}

export class TritonShortDeckGame implements IGame {

  public HIGH_CARD: number = 1;
  public PAIR: number = 2;
  public TWO_PAIRS: number = 3;
  public TRIPS: number = 4;
  public STRAIGHT: number = 5;
  public FLUSH: number = 7;
  public FULL_HOUSE: number = 6;
  public QUADS: number = 8;
  public STRAIGHT_FLUSH: number = 9;

  public A6789_STRAIGHT: boolean = true;
  public A2345_STRAIGHT: boolean = false;

  public IS_SHORT_DECK: boolean = true;

  public rank: ShortDeckRank;

  constructor() {
    this.rank = new ShortDeckRank();
  }
}
