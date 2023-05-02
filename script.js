const fileInput = document.querySelector("#fileInput");
const previewContainer = document.querySelector("#previewContainer");
const uploadButton = document.querySelector("#uploadButton");

fileInput.addEventListener("change", () => {
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = () => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const img = document.createElement("img");
      img.src = reader.result;
      img.alt = file.name;
      img.classList.add("uploaded-image");

      const imgDescription = document.createElement("p");
      imgDescription.classList.add("image-description");
      imgDescription.textContent = file.name;

      const cancelButton = document.createElement("button");
      cancelButton.classList.add("cancel-button");
      cancelButton.textContent = "Cancel";
      cancelButton.addEventListener("click", () => {
        imageContainer.remove();
      });

      imageContainer.appendChild(img);
      imageContainer.appendChild(imgDescription);
      previewContainer.appendChild(imageContainer);
