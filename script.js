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
      imageContainer.appendChild(cancelButton);
      previewContainer.appendChild(imageContainer);
    };

    reader.readAsDataURL(file);
  }
});

uploadButton.addEventListener("click", () => {
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;
    const fileType = file.type;
    const fileDescription = document.querySelector(".description").value;

    AWS.config.update({
      accessKeyId: "YOUR_ACCESS_KEY_ID",
      secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
      region: "YOUR_BUCKET_REGION"
    });

    const s3 = new AWS.S3();

    const params = {
      Bucket: "YOUR_BUCKET_NAME",
      Key: fileName,
      Body: file,
      ContentType: fileType,
      Metadata: {
        description: fileDescription
      }
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error uploading file: ", err);
      } else {
        console.log("File uploaded successfully: ", data.Location);
