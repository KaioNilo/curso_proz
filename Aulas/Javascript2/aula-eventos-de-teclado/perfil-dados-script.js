const backHome = document.querySelector("p a");

window.addEventListener("keyup", (event) => {
    if (event.code == "Backspace") {
        backHome.click();
    }
})