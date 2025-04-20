export default class WeatherFetcher {
  #url;

  #key;

  constructor() {
    this.#url =
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    this.#key = 'key=A3CSF9WP4X9MH86AKUY3RDU7Z';
  }

  async get(location, unit) {
    const unitGroup = `?unitGroup=${unit}&`;
    const res = await fetch(this.#url + location + unitGroup + this.#key, {
      mode: 'cors',
    });
    const data = await res.json();
    return WeatherFetcher.#extractInfo(data);
  }

  static async #importIcon(icon) {
    const res = await import(`../images/${icon}.png`);
    return res.default;
  }

  static async #extractInfo(o) {
    const country = o.address;
    const { resolvedAddress, description } = o;
    const { conditions, windspeed, icon, temp, feelslike } =
      o.currentConditions;
    const source = await WeatherFetcher.#importIcon(icon);
    return [
      country.toUpperCase(),
      conditions,
      windspeed,
      source,
      temp,
      feelslike,
      resolvedAddress,
      description,
    ];
  }
}
