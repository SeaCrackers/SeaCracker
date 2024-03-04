export class RandomGenerator{
  // program to generate random strings

  // declare all characters
  private static readonly  characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  public static generateString(length : number) {
    let result = '';
    const charactersLength = this.characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
