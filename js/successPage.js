//get info
//create a list with the info
//hide the navbar

//chama essa função na hora que clica no botão finish
let infoContainer = document.querySelector("#success-user-info");

let navbar = document.querySelector("#navbar");
function addInfo(){
    navbar.classList.add("hidden");
    let basicData = getBasicStorage();
    infoContainer.appendChild(createInfoItem("Nome: " + basicData.name))
    infoContainer.appendChild(createInfoItem("Nickname: " + basicData.nickname))
    infoContainer.appendChild(createInfoItem("Email: " + basicData.email))
    infoContainer.appendChild(createInfoItem("Phone: " + basicData.phone))
    // infoContainer.appendChild(createInfoItem("Age: " + basicData.age))

    let socialData = getSocialStorage();
    infoContainer.appendChild(createInfoItem("Linkedin: " + socialData.linkedin))
    infoContainer.appendChild(createInfoItem("GitHub: " + socialData.git))

    let certificatesData = getCertificatesStorage();
    //certificates
    infoContainer.appendChild(createInfoItem("Team name: " + certificatesData.team))
    infoContainer.appendChild(createInfoItem("Institution: " + certificatesData.institution))
    infoContainer.appendChild(createInfoItem("Graduation: " + certificatesData.graduation))

    console.log("basic data", getBasicStorage())
}

function createInfoItem(info){
    let h6 = document.createElement("h6");
    h6.textContent = info;
    return h6;
}

function reloadPage(){
    window.location.reload()
}


