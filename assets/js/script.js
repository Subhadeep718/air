// form-top tips
document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".tips");

  labels.forEach((label) => {
    label.addEventListener("click", function () {
      labels.forEach((l) => l.classList.remove("active"));

      label.classList.add("active");

      const radioInput = label.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
  });
});

//modal
document.addEventListener("DOMContentLoaded", function () {
  const modalbtn1 = document.querySelector("#modal-btn1");
  const modalbox1 = document.querySelector("#modal-box1");
  const modalbtn2 = document.querySelector("#modal-btn2");
  const modalbox2 = document.querySelector("#modal-box2");
  const modalbg = document.querySelector(".bg-modal");

  modalbtn1.addEventListener("click", () => {
    modalbox1.style.display = "flex";
    modalbg.style.display = "flex";
  });
  modalbtn2.addEventListener("click", () => {
    modalbox2.style.display = "flex";
    modalbg.style.display = "flex";
  });

  window.onclick = function (event) {
    if (event.target === modalbg) {
      modalbox1.style.display = "none";
      modalbox2.style.display = "none";
      modalbg.style.display = "none";
    }
  };
});
