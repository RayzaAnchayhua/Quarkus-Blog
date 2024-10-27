import "./roq.scss";

function toggleTheme() {
  const body = document.body;

  if (body.classList.contains("theme--light")) {
    body.classList.replace("theme--light", "theme--dark");
    document.getElementsByClassName("change-mode")[0].innerHTML =
      "Switch to Light Mode";
  } else {
    body.classList.replace("theme--dark", "theme--light");
    document.getElementsByClassName("change-mode")[0].innerHTML =
      "Switch to Dark Mode";
  }
}
