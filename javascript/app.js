
document.addEventListener("DOMContentLoaded", () => {
    const nav_mobile = document.getElementById("nav-ml");
    const toggleButton = document.getElementById("toggle-btn");

    if (nav_mobile && toggleButton) {
        let nav_bar_isActive = false;

        // Function to toggle the nav-mobile class
        const handleChangeNavBar = () => {
            nav_bar_isActive = !nav_bar_isActive;

            if (nav_bar_isActive) {
                nav_mobile.classList.add("nav-mobile");
            } else {
                nav_mobile.classList.remove("nav-mobile");
            }
        };

        // Use addEventListener instead of inline onclick
        toggleButton.addEventListener("click", handleChangeNavBar);
    } else {
        console.error("nav-ml or toggle-btn element not found");
    }
});
