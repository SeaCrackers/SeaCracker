/**
 * A helper that can generate things with random.
 */
export class RandomGenerator{
  /**
   * Supported chars in generateString
   * @private
   */
  private static readonly  characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  /**
   * Generate a string / room code for a given length
   * @param length
   */
  public static generateString(length : number) {
    let result = '';
    const charactersLength = this.characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
