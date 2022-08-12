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
  edit.onclick = editItem

  let deleteE = document.createElement("a");
  deleteE.classList.add("img-delete-item");
  deleteE.setAttribute("id", "delete-icon");
  let deleteIcon = document.createElement("i");
  deleteIcon.innerHTML = "<i data-feather='trash'></i>";
  deleteE.appendChild(deleteIcon);
  deleteE.onclick = removeItem

  div.appendChild(input);
  div.appendChild(heart);
  div.appendChild(edit);
  div.appendChild(deleteE);

  document.getElementById("form-cert-container").appendChild(div);

  feather.replace();
}

let moreButton = document.querySelector("#certificates-more-button");
let cont = 0;
let certificateItems = [];
moreButton.addEventListener("click", function (event) {
  let inputCertificates = document.querySelector("#form-input-certificates");
  if (inputCertificates.value.length > 0 && cont < 5) {
    createCertificateItem(inputCertificates.value);
    certificateItems.push(inputCertificates.value);
    inputCertificates.value = "";
    cont++;
  }
});


function removeItem() {
  let inputvalue = this.parentNode.firstChild.value;
  let index = certificateItems.indexOf(inputvalue);
  certificateItems.splice(index, 1)
  this.parentNode.remove();
  cont--;
}

function editItem() {
  let input = this.parentNode.firstChild;
  let index = certificateItems.indexOf(input.value);
  input.disabled = false;
  input.focus()
  input.addEventListener('keypress', function (event) {
    if(event.key === 'Enter'){
      certificateItems.splice(index, 1, input.value);
      input.disabled = true;
    }
  })
}

function getCertificatesItems(){
  return certificateItems;
}