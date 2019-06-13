export class Keg {
  public done: boolean = false;
  constructor(public name: string,
    public brand: string,
    public price: number,
    public pints: number,
    public alcoholcontent: number,
    public originalPrice: number,
    public image: number){}
}
