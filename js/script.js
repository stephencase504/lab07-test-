// Get the prev button element from the DOM
const prevButton = document.getElementById("prevButton");

// Get the next button element from the DOM
const nextButton = document.getElementById("nextButton");

// Get the gallery element from the DOM
const gallery = document.querySelector(".gallery");

// Get the caption element from the DOM
const captions = Array.from(document.querySelectorAll(".caption-text"));

// Index to keep track of the current image
let currentIndex = 0;

// Function to display an image given its index
function displayImage(index) {
  const images = gallery.querySelectorAll("img");
  images.forEach((image, i) => {
    if (i === index) {
      setTimeout(() => {
        image.classList.add("active");
        image.style.animation = "fadeIn .5s forwards";
      }, 500); // Delay the start of the second animation
    } else if (image.classList.contains("active")) {
      image.style.animation = "fadeOut .5s forwards";
      setTimeout(() => {
        image.classList.remove("active");
      }, 500);
    }
  });
  captions.forEach((caption, i) => {
    if (i === index) {
      caption.style.display = "block";
    } else {
      caption.style.display = "none";
    }
  });
}

// Display the first image
displayImage(currentIndex);

// Event listener for the previous button click
prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + captions.length) % captions.length;
  displayImage(currentIndex);
});

// Event listener for the next button click
nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % captions.length;
  displayImage(currentIndex); // Display the new image
});

// Keydown event for the whole document
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % captions.length; // Calculate the new index
    displayImage(currentIndex); // Display the new image
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + captions.length) % captions.length; // Calculate the new index
    displayImage(currentIndex); // Display the new image
  }
});
