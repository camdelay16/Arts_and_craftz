const uploadButton = document.getElementById("upload-button");
const imageUpload = document.getElementById("image-upload");

uploadButton.addEventListener("click", () => {
  imageUpload.click();
});

const uploadDirectionImageButton = document.getElementById(
  "upload-direction-image-button"
);
const directionImageInput = document.getElementById("direction-image");

uploadDirectionImageButton.addEventListener("click", () => {
  directionImageInput.click();
});

const addMaterialBtn = document.getElementById("add-material");
addMaterialBtn.addEventListener("click", addMaterial);

function addMaterial() {
  const materialAmount = document.getElementById("material-amount").value;
  const materialUnit = document.getElementById("material-unit").value;
  const materialItem = document.getElementById("material-item").value;

  if (materialAmount && materialUnit && materialItem) {
    const materialList = document.getElementById("material-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${materialAmount} ${materialUnit} - ${materialItem}`;
    materialList.appendChild(listItem);

    document.getElementById("material-amount").value = "";
    document.getElementById("material-unit").value = "";
    document.getElementById("material-item").value = "";
  } else {
    alert("Please fill in all fields for the material.");
  }
}

const addDirectionBtn = document.getElementById("add-direction");
addDirectionBtn.addEventListener("click", addDirection);

function addDirection() {
  const directionStep = document.getElementById("direction-step").value;
  const directionDescription = document.getElementById(
    "direction-description"
  ).value;
  const directionImage = document.getElementById("direction-image").files[0];

  if (directionStep && directionDescription) {
    const directionList = document.getElementById("direction-list");
    const listItem = document.createElement("li");
    const directionText = document.createElement("div");
    directionText.textContent = `${directionStep} - ${directionDescription}`;
    listItem.appendChild(directionText);

    //needed assistance from chatGPT
    if (directionImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        listItem.appendChild(img);
      };
      reader.readAsDataURL(directionImage);
    }

    directionList.appendChild(listItem);

    document.getElementById("direction-step").value = "";
    document.getElementById("direction-description").value = "";
    document.getElementById("direction-image").value = "";
  } else {
    alert("Please fill in all fields for the direction.");
  }
}

//needed assistance from ChatGPT
directionImageInput.addEventListener("change", () => {
  const file = directionImageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Do something with the image data, e.g., display it or upload it
      console.log(e.target.result);
    };

    reader.onerror = function (e) {
      console.error("Error reading file:", e);
    };

    reader.readAsDataURL(file);
  } else {
    console.log("No file selected.");
  }
});
