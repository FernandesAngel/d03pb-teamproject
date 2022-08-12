{
  /* <div class="form-fav-flex">
  <input
    class="form-input form-input-fav"
    type="text"
    placeholder="https:/www.github.com/foobar"
  />
  <a href="#" class="img-fav-heart">
    <i data-feather="heart"></i>
  </a>
</div>; */
}

// function createInfoItem(info) {
//   let h6 = document.createElement("h6");
//   h6.textContent = info;
//   return h6;
// }

//My code

function createCertificateItem(title, position) {
  let div = document.createElement("div");
  div.classList.add("certificate-item");
  div.setAttribute("position-data", position);

  let input = document.createElement("input");
  input.classList.add("form-input-fav-item", "fav-heart", "form-input");
  input.value = title;
  input.disabled = true;

  let heart = document.createElement("a");
  heart.setAttribute("id", "heartIcon");
  let heartIcon = document.createElement("i");
  heartIcon.innerHTML = "<i data-feather='heart'></i>";
  heart.appendChild(heartIcon);
  heart.classList.add("img-fav-item", "heartIcon");
  heart.onclick = onClickHeartItem;

  let edit = document.createElement("a");
  edit.classList.add("img-edit-item");
  edit.setAttribute("id", "editIcon");
  let editIcon = document.createElement("i");
  editIcon.innerHTML = "<i data-feather='edit'></i>";
  edit.appendChild(editIcon);
  edit.onclick = editItem;

  let deleteE = document.createElement("a");
  deleteE.classList.add("img-delete-item");
  deleteE.setAttribute("id", "delete-icon");
  let deleteIcon = document.createElement("i");
  deleteIcon.innerHTML = "<i data-feather='trash'></i>";
  deleteE.appendChild(deleteIcon);
  deleteE.onclick = removeItem;

  div.appendChild(input);
  div.appendChild(heart);
  div.appendChild(edit);
  div.appendChild(deleteE);

  document.getElementById("form-cert-container").appendChild(div);

  feather.replace();
}

function removeItem() {
  let inputvalue = this.parentNode.firstChild.value;
  let objectItem = certificateItems.find(i => i.name === inputvalue)
  let index = certificateItems.indexOf(objectItem);
  certificateItems.splice(index, 1);
  this.parentNode.remove();
  cont--;
}

function editItem() {
  let input = this.parentNode.firstChild;
  let objectItem = certificateItems.find(i => i.name === input.value)
  let index = certificateItems.indexOf(objectItem);
  input.disabled = false;
  input.focus();
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      certificateItems.splice(index, 1, {name: input.value, clicked: objectItem.clicked});
      input.disabled = true;
    }
  });
}

function resetItems() {
  let certificateItem = document.querySelectorAll(".certificate-item");
  if (certificateItem.length > 0) {
    certificateItem.forEach((element) => {
      element.remove();
    });
  }
}

function showCertificates() {
  resetItems();
  certificateItems.map((i) => createCertificateItem(i.name));
}

function putInFirst(arr, from, to) {
  if (arr.length > 0) {
    let item = arr.splice(from, 1);
    arr.splice(to, 0, item[0]);
  }
}

let moreButton = document.querySelector("#certificates-more-button");
let cont = 0;
let certificateItems = [];

moreButton.addEventListener("click", function (event) {
  heartIconElement.classList.remove("fav-color");
  let inputCertificates = document.querySelector("#form-input-certificates");
  if (inputCertificates.value.length > 0 && cont < 5) {
    if (clicked) {
      certificateItems.push({name: inputCertificates.value, clicked:true});
      let index = certificateItems.indexOf(inputCertificates.value);
      putInFirst(certificateItems, index, 0);
      console.log(certificateItems);
      inputCertificates.value = "";
      inputCertificates.focus();
      cont++;
    } else {
      certificateItems.push({name: inputCertificates.value, clicked:false});
      console.log(certificateItems);
      inputCertificates.value = "";
      inputCertificates.focus();
      cont++;
    }
  }
  resetItems();
  showCertificates();
});

let heartIconElement = document.querySelector(".heartIcon");
let contClickTop = 1;
let clicked = false;
heartIconElement.addEventListener("click", function () {
  if (contClickTop % 2 == 0) {
    heartIconElement.classList.remove("fav-color");
    clicked = false;
    console.log("nope");
  } else {
    clicked = true;
    heartIconElement.classList.add("fav-color");
    console.log("coração");
    console.log(certificateItems);
    resetItems();
    showCertificates();
  }
  contClickTop++;
});

let heartItemElement = document.querySelector("#heartIcon");
let contClickBottom = 1;
function onClickHeartItem() {
  let input = this.parentNode.firstChild;
  let objectItem = certificateItems.find(i => i.name === input.value)
  if (contClickBottom % 2 == 0) {
    objectItem.clicked = false;
    contClickBottom++;
  } else {
    let index = certificateItems.indexOf(objectItem);
    objectItem.clicked = true;
    putInFirst(certificateItems, index, 0);
    console.log("coração");
    console.log(certificateItems, objectItem.clicked);
    resetItems();
    showCertificates();
    contClickBottom++;
  }

  if(objectItem.clicked){
    let heart = this.parentNode.getElementsByTagName("a")[0];
    heart.classList.add("fav-color");
  } else {
    let heart = this.parentNode.getElementsByTagName("a")[0];
        heart.classList.remove("fav-color");
  }
}

function getCertificatesItems() {
  let finalItems = [];
  certificateItems.map(i => finalItems.push(i.name));
  return finalItems
  // return certificateItems
}
