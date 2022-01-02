var character;
function genPass() {
    character = parseInt(document.getElementById("character").value);
    var password = "";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-;?>.<,';
    var charactersLength = characters.length;
    for ( var i = 0; i < character; i++ ) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   document.getElementById("password").innerHTML = password;
}

genPass();