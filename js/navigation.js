let basicPage = document.querySelector("#basic");
let socialPage = document.querySelector("#social");
let certificatesPage = document.querySelector("#certificates");
let navItemBasic = document.querySelector("#nav-item-basic");
let navItemSocial = document.querySelector("#nav-item-social");
let navItemCertificates = document.querySelector("#nav-item-certificates");

socialPage.classList.add("hidden");
certificatesPage.classList.add("hidden");
basicPage.classList.remove("hidden");

function goToBasic(element){
  element.addEventListener("click", function (event) {
    event.preventDefault();
    socialPage.classList.add("hidden");
    certificatesPage.classList.add("hidden");
    basicPage.classList.remove("hidden");
    navItemBasic.classList.add("nav-item-selected");
    navItemSocial.classList.remove("nav-item-selected");
    navItemCertificates.classList.remove("nav-item-selected");
  });
}

goToBasic(navItemBasic);

let basicNextButton = document.querySelector("#basic-next-button");

function goToSocial(element){
  element.addEventListener("click", function (event) {
    event.preventDefault();
    basicPage.classList.add("hidden");
    certificatesPage.classList.add("hidden");
    socialPage.classList.remove("hidden");
    navItemBasic.classList.remove("nav-item-selected");
    navItemSocial.classList.add("nav-item-selected");
  });
}

goToSocial(basicNextButton);
goToSocial(navItemSocial);

let socialNextButton = document.querySelector("#social-next-button");

function goToCertificates(element){
  element.addEventListener("click", function (event) {
    event.preventDefault();
    basicPage.classList.add("hidden");
    socialPage.classList.add("hidden");
    certificatesPage.classList.remove("hidden");
    navItemBasic.classList.remove("nav-item-selected");
    navItemSocial.classList.remove("nav-item-selected");
    navItemCertificates.classList.add("nav-item-selected");
  });
}

goToCertificates(socialNextButton);
goToCertificates(navItemCertificates);
