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

function createInfoItem(info) {
  let h6 = document.createElement("h6");
  h6.textContent = info;
  return h6;
}

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
  heart.classList.add("img-fav-item");

  let edit = document.createElement("a");
  edit.classList.add("img-edit-item");
  edit.setAttribute("id", "editIcon");
  let editIcon = document.createElement("i");
  editIcon.innerHTML = "<i data-feather='edit'></i>";
  edit.appendChild(editIcon);

  let deleteE = document.createElement("a");
  deleteE.classList.add("img-delete-item");
  deleteE.setAttribute("id", "deleteIcon");
  let deleteIcon = document.createElement("i");
  deleteIcon.innerHTML = "<i data-feather='trash'></i>";
  deleteE.appendChild(deleteIcon);

  div.appendChild(input);
  div.appendChild(heart);
  div.appendChild(edit);
  div.appendChild(deleteE);

  document.getElementById("form-cert-container").appendChild(div);

  feather.replace();
}

let moreButton = document.querySelector("#certificates-more-button");
let newItem = "";
moreButton.addEventListener("click", function (event) {
  let inputCertificates = document.querySelector("#form-input-certificates");
  if (inputCertificates.value.length > 0) {
    newItem = createCertificateItem(inputCertificates.value);
    displayCertificateItems(newItem)
    inputCertificates.value = "";
  }
});

let certificateitems = [];
let cont = 0;
function displayCertificateItems(item) {
  while (cont < 5 ){
    certificateitems.push(item);
    // cont++;
  }
  console.log(certificateitems)
}


// Makeli's code
// let max_certs = 5;
// let x = 1;

//   event.preventDefault();
//   if (x <= max_certs) {
//     x++;
//     let textfield = document.createElement("div");
//     textfield.innerHTML =
//       "<div style='display: flex; margin-top: 10px'> <input type='text' class='form-input-fav fav-heart form-input' name='certificates[]' disabled /> <image src='./images/fav-heart.png' class='img-fav-heart'/> <input class='form-input' type='button' value='-' style='flex: 1' onClick='removeCertificate(this)'> </div>";
//     document.getElementById("form-cert-container").appendChild(textfield);
//   } else {
//     alert("Maximum number of certificates reached");
//   }
// });

// function addCertificate() {
//   if (x < max_certs ) {
//     x++;
//     let textfield = document.createElement('div');
//     textfield.innerHTML = "<div style='display: flex; margin-top: 10px'> <input type='text' class='form-input-fav fav-heart form-input' name='certificates[]' disabled /> <image src='./images/fav-heart.png' class='img-fav-heart' /> <input class='form-input' type='button' value='-' style='flex: 1' onClick='removeCertificate(this)'> </div>";
//     document.getElementById('form-cert-container').appendChild(textfield);
//   }else{
//     alert('Maximum number of certificates reached');
//   }
// }

function removeCertificate(btn) {
  btn.parentNode.remove();
  x--;
}
