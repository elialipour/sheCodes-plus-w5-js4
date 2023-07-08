let apiKey = "d1a86552de255334f6117b348c4519bd";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature} degrees in Sydney`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
