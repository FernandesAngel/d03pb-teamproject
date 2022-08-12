var selectDay = document.querySelector("#select-day");
var selectMonth = document.querySelector("#select-month");
var selectYear = document.querySelector("#select-year");
var inputAge = document.querySelector("#input-age");

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
// let inputAge = document.getElementById("input-age");

// select.addEventListener("change", () => {
//   let value = select.options[select.selectedIndex].value;
//   calculateAge(value);
// });

// function calculateAge(yearBirthday) {
//     inputAge.value = 2022 - yearBirthday;
// }

function calculateAge() {
  var now = new Date();
//   var today = new Date(now.getYear(), now.getMonth(), now.getDate());
//   console.log(today);

  var yearNow = 2022;
  var monthNow = now.getMonth() + 1;
  var dateNow = now.getDate();

  var yearDob = parseInt(selectYear.value);
  var monthDob = parseInt(selectMonth.value);
  var dateDob = parseInt(selectDay.value);
  var age = {};
  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) {
    var monthAge = monthNow - monthDob;
  } else {
    yearAge -= 1;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) {
    var dateAge = dateNow - dateDob;
  } else {
    monthAge -= 1;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge > 0) {
      monthAge = 11;
      yearAge -= 1;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };
  // if (monthNow > monthDob && dayNow > dayDob) {
  //   age.years--;
  // }
  inputAge.value = age.years;
}
