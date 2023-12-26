

const links = document.querySelectorAll("nav li");
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


//programme pour le MDP du formulaire
let passwordInput = document.getElementById('password');
function validatePassword() {
    let passwordError = document.getElementById('mdpError');
    // Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule et un caractère spécial
    let passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.[!@#$%^&()_+{}[]:;<>,.?~\/-]).{8,}$/;

    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8) {
        passwordError.textContent = ''; // Le mot de passe est valide
    } else {
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    }
}
passwordInput.addEventListener('input',validatePassword)

//programme pour le darkmode
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}