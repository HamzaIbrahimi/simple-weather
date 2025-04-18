import errorImage from '../images/cant-find.jpg';

export const elems = {
  container: document.querySelector('.cardContainer'),
  form: document.querySelector('form'),
};
export function displayInfo(country, condition, wind, img, weather, feelsLike) {
  elems.container.innerHTML = '';
  elems.container.insertAdjacentHTML(
    'beforeend',
    `
    <div class="card">
      <h3 id="country">${country}°</h3>
      <div></div>
      <div class="weatherConditions">
        <div id="condition">${condition}</div>
        <div id="wind">${wind}</div>
      </div>
      <div class="weatherDisplay">
        <img id="weatherImg" src="${img}" alt="not found">
        <h1 id="weather">${weather}</h1>
      </div>
      <h3 id="feelsLike">Feels Like ${feelsLike}°</h3>
    </div>
    `,
  );
}

export function displayError() {
  elems.container.innerHTML = '';
  elems.container.insertAdjacentHTML(
    'beforeend',
    ` <div class="card"><img id="errorImg" src="${errorImage}" alt=""></div>
        `,
  );
}
