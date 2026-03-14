
function filterCategory(category) {
  const systemsSection = document.getElementById("systems-section");
  const designsSection = document.getElementById("designs-section");
  const dropdownBtn = document.getElementById("filterDropdown");

  if (category === "systems" || category === "iandev") {
    if (systemsSection) systemsSection.style.display = "block";
    if (designsSection) designsSection.style.display = "none";
    dropdownBtn.innerText = "INFORMATION SYSTEMS";
  } else if (category === "designs" || category === "iandesigns") {
    if (systemsSection) systemsSection.style.display = "none";
    if (designsSection) designsSection.style.display = "block";
    dropdownBtn.innerText = "GRAPHIC DESIGN";
  }
}

// This ensures it works on page load and when the hash changes
function handleRouting() {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    filterCategory(hash);
  }
}

window.addEventListener("load", handleRouting);
window.addEventListener("hashchange", handleRouting);


const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: false,
});
