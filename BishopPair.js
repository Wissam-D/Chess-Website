const toggleButton = document.getElementById("toggle-mode")
const form = document.getElementById("toggled-form")
toggleButton.addEventListener('click', () => {
    const dataVisibility = form.getAttribute("data-visible")
    if (dataVisibility === "false") {
        form.setAttribute("data-visible", "true");
        toggleButton.innerHTML = "Already got an account?";
    }
    else if (dataVisibility === "true") {
        form.setAttribute("data-visible", "false");
        toggleButton.innerHTML= "Don't have an account?";
    }
})