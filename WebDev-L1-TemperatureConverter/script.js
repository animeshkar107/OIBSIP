const temp = document.getElementById("temp");
const unit = document.getElementById("unit");
const btn = document.getElementById("btn");

const celres = document.getElementById("celres");
const fahrenres = document.getElementById("fahrenres");
const kelres = document.getElementById("kelres");

const error = document.getElementById("error");

btn.addEventListener("click", convertTemperature);
temp.addEventListener("input", validateInput);
unit.addEventListener("change", validateInput);

function validateInput() {
  const value = temp.value.trim();

  if (value === "") {
    error.textContent = "Please enter a temperature.";

    celres.innerHTML =
      '<i class="fa-solid fa-temperature-half temp-icon"></i> Celsius :';

    fahrenres.innerHTML =
      '<i class="fa-solid fa-fire fire-icon"></i> Fahrenheit :';

    kelres.innerHTML =
      '<i class="fa-solid fa-snowflake snow-icon"></i> Kelvin :';

    return false;
  }

  const number = Number(value);

  if (isNaN(number)) {
    error.textContent = "Please enter a valid number.";
    return false;
  }

  if (unit.value === "celsius" && number < -273.15) {
    error.textContent = "Temperature cannot be below -273.15°C.";
    return false;
  }

  if (unit.value === "fahrenheit" && number < -459.67) {
    error.textContent = "Temperature cannot be below -459.67°F.";
    return false;
  }

  if (unit.value === "kelvin" && number < 0) {
    error.textContent = "Temperature cannot be below 0 K.";
    return false;
  }

  error.textContent = "";
  return true;
}

function convertTemperature() {
  if (!validateInput()) {
    celres.innerHTML =
      '<i class="fa-solid fa-temperature-half temp-icon"></i> Celsius :';

    fahrenres.innerHTML =
      '<i class="fa-solid fa-fire fire-icon"></i> Fahrenheit :';

    kelres.innerHTML =
      '<i class="fa-solid fa-snowflake snow-icon"></i> Kelvin :';

    return;
  }

  const number = Number(temp.value);

  let celsius;
  let fahrenheit;
  let kelvin;

  if (unit.value === "celsius") {
    celsius = number;
    fahrenheit = (number * 9) / 5 + 32;
    kelvin = number + 273.15;
  } else if (unit.value === "fahrenheit") {
    fahrenheit = number;
    celsius = ((number - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = number;
    celsius = number - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  celres.innerHTML = `<i class="fa-solid fa-temperature-half temp-icon"></i> Celsius : ${celsius.toFixed(2)} °C`;

  fahrenres.innerHTML = `<i class="fa-solid fa-fire fire-icon"></i> Fahrenheit : ${fahrenheit.toFixed(2)} °F`;

  kelres.innerHTML = `<i class="fa-solid fa-snowflake snow-icon"></i> Kelvin : ${kelvin.toFixed(2)} K`;
}