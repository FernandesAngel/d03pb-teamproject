// function verifyFull(input) {
//   let inputLabel = document.querySelector("label[for=" + input.id + "]");
//   input.addEventListener("focusout", function (event) {
//     if (input.value.length > 0) {
//       console.log("bota no storage ou retorna o nome", input.value);
//       inputLabel.classList.remove("form-label-wrong");
//       input.classList.remove("form-input-wrong");
//       return input.value;
//     } else {
//       inputLabel.classList.add("form-label-wrong");
//       input.classList.add("form-input-wrong");
//       console.log("errado", input.value);
//       return false;
//     }
//   });
//   return input.value;
// }

// function verifyAge(input) {
//   let inputLabel = document.querySelector("label[for=" + input.id + "]");
//   input.addEventListener("change", function (event) {
//     if (input.value.length > 0 && input.value.length <= 3) {
//       console.log("bota no storage ou retorna a idade", input.value);
//       inputLabel.classList.remove("form-label-wrong");
//       input.classList.remove("form-input-wrong");
//       return input.value;
//     } else {
//       inputLabel.classList.add("form-label-wrong");
//       input.classList.add("form-input-wrong");
//       console.log("errado", input.value);
//       return false;
//     }
//   });
//   return input.value;
// }

// verifyReg(nameInput, regName);
// verifyReg(emailInput, regEmail);
// verifyAge(ageInput);
