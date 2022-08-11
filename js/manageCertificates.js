var max_certs = 5;
var x = 1;

function addCertificate(){
  if (x < max_certs ) {
    x++;
    var textfield = document.createElement('div');
    textfield.innerHTML = "<div style='display: flex; margin-top: 10px'> <input type='text' class='form-input-fav fav-heart form-input' name='certificates[]' disabled /> <image src='./images/fav-heart.png' class='img-fav-heart' /> <input class='form-input' type='button' value='-' style='flex: 1' onClick='removeCertificate(this)'> </div>";
    document.getElementById('form-cert-container').appendChild(textfield);
  }else{
    alert('Maximum number of certificates reached');
  }
}

function removeCertificate(btn){
    btn.parentNode.remove();
    x--;
}

