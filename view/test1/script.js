const navToggler = document.querySelector(".toggler-container");
const navigation = document.querySelector(".navigation");


navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navigation.classList.toggle("active");
}
