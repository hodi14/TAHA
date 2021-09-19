const url = window.location.pathname;
console.log(url);
let active;
switch(url) {
    case "/projects" :
        active = document.querySelector("header .projects a");
        break;
    case "/about":
        active = document.querySelector("header .about a");
        break;

    case "/contact" :
        active = document.querySelector("header .contact a");
        break;
    case "/" :
        active = document.querySelector("header .home a");
        break;
    default :
        active = document.querySelector("header");

}
active.classList.add("active");

const items = document.querySelectorAll("header li a");
for (let item of items) {
    item.onclick = () => {
        for (other of items) {
            other.classList.remove("active");
        }
        item.classList.add("active");
    }
}

const home = document.querySelector("header .logo");
home.onclick = () => {
    for (other of items) {
        other.classList.remove("active");
    }
    document.querySelector("header .home a").classList.add("active");
}

