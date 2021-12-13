import { CountryName } from './CountryName.model';
import { Currency } from './Currency.model';
import { Flags } from './Flags.model';

export class Country {
  private alpha3Code: string;
  private name: CountryName;
  private nativeName: string;
  private population: number;
  private region: string;
  private subregion: string;
  private capital: string;
  private tld: string[];
  private currencies: {};
  private languages: {};
  private borders: string[];
  private flags: Flags;

  constructor(obj?: any) {
    this.alpha3Code = (obj && obj.alpha3Code) || '';
    this.name = (obj && obj.name) || '';
    this.nativeName = (obj && obj.nativeName) || '';
    this.population = (obj && obj.population) || null;
    this.region = (obj && obj.region) || '';
    this.subregion = (obj && obj.subregion) || '';
    this.capital = (obj && obj.capital) || '';
    this.tld = (obj && obj.tld) || [];
    this.currencies = (obj && obj.currencies) || [];
    this.languages = (obj && obj.languages) || {};
    this.borders = (obj && obj.borders) || [];
    this.flags = (obj && obj.flags) || '';
  }

  /**
   * Getter $alpha3Code
   * @return {string}
   */
  public get $alpha3Code(): string {
    return this.alpha3Code;
  }

  /**
   * Getter $name
   * @return {CountryName}
   */
  public get $name(): CountryName {
    return this.name;
  }

  /**
   * Getter $nativeName
   * @return {string}
   */
  public get $nativeName(): string {
    return this.nativeName;
  }

  /**
   * Getter $population
   * @return {number}
   */
  public get $population(): number {
    return this.population;
  }

  /**
   * Getter $region
   * @return {string}
   */
  public get $region(): string {
    return this.region;
  }

  /**
   * Getter $subregion
   * @return {string}
   */
  public get $subregion(): string {
    return this.subregion;
  }

  /**
   * Getter $capital
   * @return {string}
   */
  public get $capital(): string {
    return this.capital;
  }

  /**
   * Getter $tld
   * @return {string[]}
   */
  public get $tld(): string[] {
    return this.tld;
  }

  /**
   * Getter $currencies
   * @return {{}}
   */
  public get $currencies(): {} {
    return this.currencies;
  }

  /**
   * Getter $languages
   * @return {{}}
   */
  public get $languages(): {} {
    return this.languages;
  }

  /**
   * Getter $borders
   * @return {string[]}
   */
  public get $borders(): string[] {
    return this.borders;
  }

  /**
   * Getter $flags
   * @return {Flags}
   */
  public get $flags(): Flags {
    return this.flags;
  }

  /**
   * Setter $alpha3Code
   * @param {string} value
   */
  public set $alpha3Code(value: string) {
    this.alpha3Code = value;
  }

  /**
   * Setter $name
   * @param {CountryName} value
   */
  public set $name(value: CountryName) {
    this.name = value;
  }

  /**
   * Setter $nativeName
   * @param {string} value
   */
  public set $nativeName(value: string) {
    this.nativeName = value;
  }

  /**
   * Setter $population
   * @param {number} value
   */
  public set $population(value: number) {
    this.population = value;
  }

  /**
   * Setter $region
   * @param {string} value
   */
  public set $region(value: string) {
    this.region = value;
  }

  /**
   * Setter $subregion
   * @param {string} value
   */
  public set $subregion(value: string) {
    this.subregion = value;
  }

  /**
   * Setter $capital
   * @param {string} value
   */
  public set $capital(value: string) {
    this.capital = value;
  }

  /**
   * Setter $tld
   * @param {string[]} value
   */
  public set $tld(value: string[]) {
    this.tld = value;
  }

  /**
   * Setter $currencies
   * @param {{}} value
   */
  public set $currencies(value: {}) {
    this.currencies = value;
  }

  /**
   * Setter $languages
   * @param {{}} value
   */
  public set $languages(value: {}) {
    this.languages = value;
  }

  /**
   * Setter $borders
   * @param {string[]} value
   */
  public set $borders(value: string[]) {
    this.borders = value;
  }

  /**
   * Setter $flags
   * @param {Flags} value
   */
  public set $flags(value: Flags) {
    this.flags = value;
  }
}
