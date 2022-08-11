let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
let regAge = /[3-9]\d\d/g;
let regEmail = /\S+@\S+\.\S+/;
let regGit = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;

let nameInput = document.querySelector("#input-name");
let emailInput = document.querySelector("#input-email");
let ageInput = document.querySelector("#input-age");
let nicknameInput = document.querySelector("#input-nickname");
let phoneInput = document.querySelector("#input-phone");

let gitInput = document.querySelector("#input-git");


let teamInput = document.querySelector("#input-team");
let institutionInput = document.querySelector("#input-institution");
let graduationInput = document.querySelector("#input-graduation");
let checkboxInput = document.querySelector("#input-checkbox");

function verifyReg(input, reg) {
  let inputLabel = document.querySelector("label[for=" + input.id + "]");
  input.addEventListener("focusout", function (event) {
    if (input.value.length > 0 && reg.test(input.value)) {
      console.log("bota no storage ou retorna o nome", input.value);
      inputLabel.classList.remove("form-label-wrong");
      input.classList.remove("form-input-wrong");

    } else {
      inputLabel.classList.add("form-label-wrong");
      input.classList.add("form-input-wrong");
      console.log("errado", input.value);
      return false;
    }
  })
  return input.value;
}

function verifyFull(input) {
  let inputLabel = document.querySelector("label[for=" + input.id + "]");
  input.addEventListener("focusout", function (event) {
    if (input.value.length > 0) {
      console.log("bota no storage ou retorna o nome", input.value);
      inputLabel.classList.remove("form-label-wrong");
      input.classList.remove("form-input-wrong");

    } else {
      inputLabel.classList.add("form-label-wrong");
      input.classList.add("form-input-wrong");
      console.log("errado", input.value);
      return false;
    }
  })
  return input.value;
}
function verifyCheckbox(input) {
  input.addEventListener("change", function (event) {
    if (input.checked) {
      console.log("bota no storage ou retorna o nome", input.value);
    } else {
      console.log("errado", input.value);
      return false;
    }
  })
  return input.value;
}

function basicValidation(){
  let validatedName = verifyReg(nameInput, regName);
  let validatedEmail = verifyReg(emailInput, regEmail);
  let validatedAge = verifyReg(ageInput, regAge);
  let validatedCheckbox = verifyCheckbox(checkboxInput);
  let validatedNickname = nicknameInput.value;
  let validatedPhone = phoneInput.value;

  if(!validatedAge  && !validatedEmail  && !validatedCheckbox  && !validatedName ){
    return {
      name: validatedName,
      nickname: validatedNickname,
      email: validatedEmail,
      age: validatedAge,
    }
  } else {
    return false
  }
}

verifyReg(gitInput, regGit);
verifyFull(teamInput);
verifyFull(institutionInput);
verifyFull(graduationInput);


//input terms checked or not
