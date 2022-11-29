/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
function convertKilograms() {
    let kilos = document.getElementById("search").value 
    let pounds = calculatePounds(kilos);
    let grams = calculateGrams(kilos);
    let oz = calculateOz(kilos);
    document.getElementById("pound-amount").innerHTML = pounds;
    document.getElementById("gram-amount").innerHTML = grams;
    document.getElementById("oz-amount").innerHTML = oz;
}

function calculatePounds(kilos) {
    return kilos * 2.2046;
}

function calculateGrams(kilos) {
    return kilos / 0.0010000;

}

function calculateOz(kilos) {
    return kilos * 35.274;
}