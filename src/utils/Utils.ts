export default class Utils {
  public static toCoverId(url: string) {
    const id = url
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");
    return id;
  }
}
