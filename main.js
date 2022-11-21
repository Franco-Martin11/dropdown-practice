const handleDropdownClicked = (event) => {
  event.stopPropagation();
  const dropdown = document.getElementById("dropdown");
  togleDropdown(!dropdown.classList.contains("open"));
};

const togleDropdown = (shouldOpen) => {
  const dropdown = document.getElementById("dropdown");
  const icon = document.getElementById("icon");
  if (shouldOpen) {
    dropdown.classList.add("open");
  } else {
    dropdown.classList.remove("open");
  }
  icon.innerText = dropdown.classList.contains("open")
    ? "🗙"
    : "☰";
};

document.body.addEventListener("click", () => togleDropdown());
