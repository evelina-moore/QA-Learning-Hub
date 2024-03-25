const inputName = document.getElementById("inputName");
const inputId = document.getElementById("inputId");
const inputMessage = document.getElementById("inputMessage");

const clearForm = () => {
  setTimeout(() => {
    inputName.value = "";
    inputId.value = "";
    inputMessage.value = "";
  }, 1000)
}