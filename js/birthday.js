let selectDay = document.querySelector("#select-day");
let selectMonth = document.querySelector("#select-month");
let selectYear = document.querySelector("#select-year");

for (let i = 1; i <= 31; i++) {
    let optionDay = document.createElement("option");
    optionDay.value = i;
    optionDay.textContent = i;
    selectDay.appendChild(optionDay);
}

for (let i = 1; i <= 12; i++) {
    let optionMonth = document.createElement("option");
    optionMonth.value = i;
    optionMonth.textContent = i;
    selectMonth.appendChild(optionMonth);
}

for (let i = 1992; i <= 2022; i++) {
    let optionYear = document.createElement("option");
    optionYear.value = i;
    optionYear.textContent = i;
    selectYear.appendChild(optionYear);
}

let select = document.getElementById("select-year");
let inputAge = document.getElementById("input-age");

select.addEventListener("change", () =>{
    let value = select.options[select.selectedIndex].value;
    calculateAge(value);
})

function calculateAge(yearBirthday) {
    inputAge.value = 2022 - yearBirthday;
}