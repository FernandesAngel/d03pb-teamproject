let basicNextButton = document.querySelector("#basic-next-button");
function enableBasicNext() {
  let basicForm = basicValidation()
  if ( !basicForm ) {
    console.log("disable button");
  } else {
    console.log("enable button");
    goToSocial(basicNextButton);
    goToSocial(navItemSocial);
  }
}

enableBasicNext()