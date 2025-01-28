var confirmationButtons = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

// function hideConfirmation() {
//   confirmation.classList.remove("is-active");
// }

confirmationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    confirmation.classList.add("is-active");
    setTimeout(() => {
      confirmation.classList.remove("is-active");
    }, 3000);

    // setTimeout(function () {
    //   confirmation.classList.remove("is-active");
    // }, 3000);s

    // setTimeout(hideConfirmation, 3000);
  });
});

// console.log(document.querySelector("product-addtocart"));
