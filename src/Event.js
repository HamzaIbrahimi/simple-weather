import { displayError, displayInfo, elems, validateInput } from './Dom';
import WeatherFetcher from './Fetch';

export default class Events {
  constructor() {
    this.fetch = new WeatherFetcher();
  }

  init() {
    elems.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submission();
    });
    elems.input.addEventListener('input', () => {
      validateInput(elems.input);
    });
  }

  async submission() {
    const input = document.querySelector('#location_input');
    const radio = document.querySelector('input[type="radio"]:checked');
    try {
      const weatherData = await this.fetch.get(input.value, radio.value);
      displayInfo(...weatherData, radio.value);
    } catch (error) {
      displayError();
    }
  }
}
