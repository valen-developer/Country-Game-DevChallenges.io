export class Country {
  public readonly name: string;
  public readonly capital: string;
  public readonly flagUrl: string;

  constructor(name: string, capital: string, flag: string) {
    this.name = name;
    this.capital = capital;
    this.flagUrl = flag;
  }
}
