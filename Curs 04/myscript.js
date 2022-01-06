alert("Salut sefule!");

document.getElementById("salut").addEventListener("click", changeText);

function changeText() {
    console.log(this)
    this.innerHTML = "Be careful, apasa mai usor";
}

document.getElementById("atentie").addEventListener("click", salutUser);

function salutUser() {
    alert("Wow, wow, be careful");
}