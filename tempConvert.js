
const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};

const celsiusButton = document.getElementById("celsiusConverter");
const fahrenheitButton = document.getElementById("fahrenheitConverter");
const resetButton = document.getElementById("reset");
const resultDisplay = document.getElementById("result");

celsiusButton.addEventListener("click", () => {
    const celsiusValue = document.getElementById("celsiusInput").value;
    const fahrenheitResult = convertCelsiusToFahrenheit(celsiusValue);
    document.getElementById("fahrenheitInput").value = fahrenheitResult;
});

fahrenheitButton.addEventListener("click", () => {
    const fahrenheitValue = document.getElementById("fahrenheitInput").value;
    const celsiusResult = convertFahrenheitToCelsius(fahrenheitValue);
    document.getElementById("celsiusInput").value = celsiusResult;
});

resetButton.addEventListener("click", () => {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
});