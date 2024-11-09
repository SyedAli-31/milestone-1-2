var _a;
// Function to toggle skills section visibility
(_a = document.getElementById("toggle-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skills = document.getElementById("skills");
    if (skills) {
        skills.style.display = skills.style.display === "none" ? "block" : "none";
    }
});
