let menuBar = document.querySelector(".bar");
menuBar.addEventListener("click", function () {
  let resSidebar = document.querySelector(".res-sidebar");
  resSidebar.classList.add("active");
  let overlay = document.querySelector(".overlay");
  overlay.classList.add("overlayActive");
});

let cross = document.querySelector(".cross");
cross.addEventListener("click", function () {
  let resSidebar = document.querySelector(".res-sidebar");
  resSidebar.classList.remove("active");
  let overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlayActive");
});
