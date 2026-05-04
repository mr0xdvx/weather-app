async function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "d40a76930272502ab1a671489f6aefdb";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    // error handle
    if (data.cod != 200) {
      document.getElementById("result").innerHTML = "City not found ❌";
      return;
    }

    document.getElementById("result").innerHTML =
      `🌡 Temperature: ${data.main.temp}°C <br>
       ☁ Weather: ${data.weather[0].description}`;

  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching data ⚠️";
  }
}
