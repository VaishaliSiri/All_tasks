function changeImage(selected) {
  const img1 = document.getElementById('myImage');
  const img2 = document.getElementById('myImage1');

  if (selected === 'district') {
    img1.src = "./quantum screen assets/icons/radio-button-on.svg";
    img2.src = "./quantum screen assets/icons/radio-button-off.svg";
  } else if (selected === 'independent') {
    img1.src = "./quantum screen assets/icons/radio-button-off.svg";
    img2.src = "./quantum screen assets/icons/radio-button-on.svg";
  }
}

function remember(){
    var rem_image = document.getElementById('no_remember'); 
    if(rem_image.src.match('checkbox-checked')){
        rem_image.src = "./quantum screen assets/icons/checkbox-unchecked.svg"
    }else{
        rem_image.src = "./quantum screen assets/icons/checkbox-checked.svg"
    }
}

function showPassword(){
    var pass = document.getElementById("showPass");
    if(pass.type === 'password'){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}