// Function to toggle skills section visibility
document.getElementById("toggle-skill")?.addEventListener("click", () => {
    const skills = document.getElementById("skills");
    if (skills) {
        skills.style.display = skills.style.display === "none" ? "block" : "none";
    }
});