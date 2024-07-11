document.addEventListener('DOMContentLoaded', () => {
  const seeMore = document.getElementById("btn-seemore");
  const templates = document.getElementById("templatesH");
  const custom = document.getElementById("custom");
  const uploadImage = document.getElementById("uploadImage");
  const textAdd = document.querySelector(".text-add");
  const textarea = document.querySelector(".text");
  const submitBtn = document.getElementById("submit");
  const imageContainer = document.querySelector(".image-container");
  const myImage = document.getElementById("myImage");
  const textOverlay = document.querySelector(".text-overlay");
  const downloadBtn = document.getElementById("downloadBtn");

  seeMore.addEventListener("click", () => {
    custom.style.display = "block";
    templates.style.display = "none";
  });

  textAdd.addEventListener("click", () => {
    textarea.style.display = "block";
  });

  uploadImage.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        myImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  submitBtn.addEventListener("click", () => {
    const userText = textarea.value;
    if (myImage.src && userText) {
      textOverlay.textContent = userText;
      imageContainer.style.display = "block";
      downloadBtn.style.display = "block";
    }
    else if(myImage.src){
      alert("Please you have to add a text");
    }
  });

  downloadBtn.addEventListener("click", () => {
    html2canvas(imageContainer).then(canvas => {
      const link = document.createElement('a');
      link.download = 'custom-image.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });
});
