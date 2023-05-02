const fileInput = document.querySelector("#fileInput");
const previewContainer = document.querySelector("#previewContainer");
const uploadButton = document.querySelector("#uploadButton");

fileInput.addEventListener("change", () => {
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = () => {
