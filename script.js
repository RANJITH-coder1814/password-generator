function generatePassword(){

let length = document.getElementById("length").value;
let uppercase = document.getElementById("uppercase").checked;
let numbers = document.getElementById("numbers").checked;
let symbols = document.getElementById("symbols").checked;

let chars = "abcdefghijklmnopqrstuvwxyz";

if(uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(numbers) chars += "0123456789";
if(symbols) chars += "!@#$%^&*()_+";

let password = "";

for(let i=0;i<length;i++){
password += chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("password").value = password;

}

function copyPassword(){
let password = document.getElementById("password");

password.select();
document.execCommand("copy");

alert("Password copied!");
}
