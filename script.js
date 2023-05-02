const fileInput = document.querySelector("#fileInput");
const previewContainer = document.querySelector("#previewContainer");
const uploadButton = document.querySelector("#uploadButton");

fileInput.addEventListener("change", () => {
  const files = fileInput.files;

