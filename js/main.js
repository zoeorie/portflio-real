  // USER PERSONAS: SHIMMER
  let currentSlide = 0; // Start with the first slide

  // Grab all images and dots inside the carousel
  const images = document.querySelectorAll('.carousel-images img');
  const dots = document.querySelectorAll('.dot');

  // Function to show the slide based on the currentSlide index
  function showSlide(index) {
    // Loop from the last image to the first
    if (index >= images.length) currentSlide = 0;
    // Loop from the first image to the last
    else if (index < 0) currentSlide = images.length - 1;
    else currentSlide = index;

    // Remove 'active' class from all images and dots
    images.forEach((img) => img.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    // Add 'active' class to the current image and corresponding dot
    images[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // EMPATHY MAPS
  let currentIndex = 0; // Start with the first slide

  // Grab all images and dots inside the slider
  const sliderImages = document.querySelectorAll('.slider-images img');
  const navDots = document.querySelectorAll('.nav-dot');
  
  // Function to show the slide based on the currentIndex
  function navigateSlide(index) {
    // Loop from the last image to the first
    if (index >= sliderImages.length) currentIndex = 0;
    // Loop from the first image to the last
    else if (index < 0) currentIndex = sliderImages.length - 1;
    else currentIndex = index;
  
    // Remove 'active' class from all images and dots
    sliderImages.forEach((img) => img.classList.remove('active'));
    navDots.forEach((dot) => dot.classList.remove('active'));
  
    // Add 'active' class to the current image and corresponding dot
    sliderImages[currentIndex].classList.add('active');
    navDots[currentIndex].classList.add('active');
  }
  
  // USER PERSONAS: CLOURO
  navigateSlide(currentIndex);
  
  let currentNewIndex = 0; // Start with the first slide

// Grab all images and dots inside the new slider
const newSliderImages = document.querySelectorAll('.new-slider-images img');
const newNavDots = document.querySelectorAll('.new-nav-dot');

// Function to show the slide based on the currentNewIndex
function navigateNewSlide(index) {
  // Loop from the last image to the first
  if (index >= newSliderImages.length) currentNewIndex = 0;
  // Loop from the first image to the last
  else if (index < 0) currentNewIndex = newSliderImages.length - 1;
  else currentNewIndex = index;

  // Remove 'active' class from all images and dots
  newSliderImages.forEach((img) => img.classList.remove('active'));
  newNavDots.forEach((dot) => dot.classList.remove('active'));

  // Add 'active' class to the current image and corresponding dot
  newSliderImages[currentNewIndex].classList.add('active');
  newNavDots[currentNewIndex].classList.add('active');
}

// Show the first slide initially
navigateNewSlide(currentNewIndex);


  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.visibility = 'hidden';
    document.getElementById('popup').style.opacity = '0';
  });