
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

  // Show the first slide initially
  showSlide(currentSlide);

