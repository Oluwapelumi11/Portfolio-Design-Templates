var button = document.getElementById('navtoggle')
let navbar = document.getElementById("nav")
let open = document.querySelector('#open')
let close = document.querySelector('#close')
shown = false
button.addEventListener('click', () => {
    shown = !shown
    navbar.style.display = shown ? "block":"none";
    open.style.display = shown ? "none":"flex"
    close.style.display = shown ? "flex":"none"
})
