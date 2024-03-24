// Modal 1
document.getElementById("openModal1").addEventListener("click", function () {
  document.getElementById("modalOverlay1").style.display = "block";
  document.querySelector(".modal1").style.display = "block";
});
document.getElementById("modalClose1").addEventListener("click", function () {
  document.getElementById("modalOverlay1").style.display = "none";
  document.querySelector(".modal1").style.display = "none";
});
// Modal 2
document.getElementById("openModal2").addEventListener("click", function () {
  document.getElementById("modalOverlay2").style.display = "block";
  document.querySelector(".modal2").style.display = "block";
});
document.getElementById("modalClose2").addEventListener("click", function () {
  document.getElementById("modalOverlay2").style.display = "none";
  document.querySelector(".modal2").style.display = "none";
});
// Modal 3
document.getElementById("openModal3").addEventListener("click", function () {
  document.getElementById("modalOverlay3").style.display = "block";
  document.querySelector(".modal3").style.display = "block";
});
document.getElementById("modalClose3").addEventListener("click", function () {
  document.getElementById("modalOverlay3").style.display = "none";
  document.querySelector(".modal3").style.display = "none";
});

document
  .querySelector(".modal-overlay1")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("modalOverlay1").style.display = "none";
      document.querySelector(".modal1").style.display = "none";
    }
  });

document
  .querySelector(".modal-overlay2")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("modalOverlay2").style.display = "none";
      document.querySelector(".modal2").style.display = "none";
    }
  });

document
  .querySelector(".modal-overlay3")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("modalOverlay3").style.display = "none";
      document.querySelector(".modal3").style.display = "none";
    }
  });
