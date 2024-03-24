const arrayOfInputs = document.querySelectorAll(".inputTofind");

arrayOfInputs.forEach((element) => {
  element.addEventListener("click", function () {
    inputController(element, element.checked);
  });
});

function inputController(element, statusOfInput) {
  if (statusOfInput === true) {
    enableNextLink(element);
  } else {
    disableNextLink(element);
  }
}

function disableNextLink(element) {
  let nextElement = element.nextElementSibling;

  while (nextElement && nextElement.tagName !== "A") {
    nextElement = nextElement.nextElementSibling;
  }

  nextElement.setAttribute("onclick", "return false");
}

function enableNextLink(element) {
  let nextElement = element.nextElementSibling;

  while (nextElement && nextElement.tagName !== "A") {
    nextElement = nextElement.nextElementSibling;
  }

  nextElement.removeAttribute("onclick");
}
