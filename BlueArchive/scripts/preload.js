var loader = document.querySelector(".preload")
window.addEventListener("load", vanish);
function vanish(){
    loader.classList.add("disappear");
}