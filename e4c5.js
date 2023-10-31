// button js
const navToggle = document.querySelector(".mobile-toggle")
const navigation = document.querySelector(".navlink-container")
navToggle.addEventListener("click", () => {
    const visibility = navigation.getAttribute('data-visible')
    if (visibility === "false") {
        navigation.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        navigation.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    };
});