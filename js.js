"use strict";
/*     	MOMOZAR (Pty) Ltd
      
		Student Name: Tshenolo Breadwin Makgetla
		Date: 14 June 2025  

		Filename: js05.js
*/

window.addEventListener("load", () => {
  setupGallery();
  setupTabletToggle();

  // Viewport width detection
  const viewportWidth = window.innerWidth;
  console.log("Current viewport width:", viewportWidth);
});

function setupGallery() {
  let imageCount = imgFiles.length;
  let galleryBox = document.getElementById("gallery");
  let currentSlide = 1;
  let runShow = true;
  let showRunning;

  let galleryTitle = document.createElement("h1");
  galleryTitle.id = "galleryTitle";
  galleryTitle.textContent = slidesTitle;
  galleryBox.appendChild(galleryTitle);

  let slideCounter = document.createElement("div");
  slideCounter.id = "slideCounter";
  slideCounter.textContent = currentSlide + "/" + imageCount;
  galleryBox.appendChild(slideCounter);

  let leftBox = document.createElement("div");
  leftBox.id = "leftBox";
  leftBox.innerHTML = "&#9664;";
  leftBox.onclick = moveToLeft;
  galleryBox.appendChild(leftBox);

  let rightBox = document.createElement("div");
  rightBox.id = "rightBox";
  rightBox.innerHTML = "&#9654;";
  rightBox.onclick = moveToRight;
  galleryBox.appendChild(rightBox);

  let playPause = document.createElement("div");
  playPause.id = "playPause";
  playPause.innerHTML = "&#9199;";
  playPause.onclick = startStopShow;
  galleryBox.appendChild(playPause);

  let slideBox = document.createElement("div");
  slideBox.id = "slideBox";
  galleryBox.appendChild(slideBox);

  for (let i = 0; i < imageCount; i++) {
    let image = document.createElement("img");
    image.src = imgFiles[i];
    image.alt = imgCaptions[i];
    image.onclick = createModal;
    slideBox.appendChild(image);
  }

  function moveToRight() {
    let firstImage = slideBox.firstElementChild.cloneNode(true);
    firstImage.onclick = createModal;
    slideBox.appendChild(firstImage);
    slideBox.removeChild(slideBox.firstElementChild);
    currentSlide = (currentSlide % imageCount) + 1;
    slideCounter.textContent = currentSlide + " / " + imageCount;
  }

  function moveToLeft() {
    let lastImage = slideBox.lastElementChild.cloneNode(true);
    lastImage.onclick = createModal;
    slideBox.removeChild(slideBox.lastElementChild);
    slideBox.insertBefore(lastImage, slideBox.firstElementChild);
    currentSlide = (currentSlide - 1) || imageCount;
    slideCounter.textContent = currentSlide + " / " + imageCount;
  }

  function startStopShow() {
    if (runShow) {
      showRunning = window.setInterval(moveToRight, 2000);
      runShow = false;
    } else {
      window.clearInterval(showRunning);
      runShow = true;
    }
  }

  function createModal() {
    let modalWindow = document.createElement("div");
    modalWindow.id = "activeModal";

    let figureBox = document.createElement("figure");
    modalWindow.appendChild(figureBox);

    let modalImage = this.cloneNode(true);
    figureBox.appendChild(modalImage);

    let figureCaption = document.createElement("figcaption");
    figureCaption.textContent = modalImage.alt;
    figureBox.appendChild(figureCaption);

    let closeBox = document.createElement("div");
    closeBox.id = "modalClose";
    closeBox.innerHTML = "&times;";
    closeBox.onclick = () => document.body.removeChild(modalWindow);

    modalWindow.appendChild(closeBox);
    document.body.appendChild(modalWindow);
  }
}

function setupTabletToggle() {
  const content = document.getElementById("tabletContent");
  const toggleBtn = document.getElementById("toggleBtn");

  function isTabletViewport() {
    return window.innerWidth >= 768 && window.innerWidth <= 1024;
  }

  function toggleTabletContent() {
    if (isTabletViewport()) {
      content.style.display = content.style.display === "none" ? "block" : "none";
    } else {
      content.style.display = "none";
    }
  }

  toggleBtn.addEventListener("click", toggleTabletContent);

  if (!isTabletViewport()) {
    content.style.display = "none";
  }
}



window.addEventListener("load", setupGallery);

function setupGallery() {
   let imageCount = imgFiles.length;
   let galleryBox = document.getElementById("gallery");
   let currentSlide = 1;
   let runShow = true;
   let showRunning;
   
   let galleryTitle = document.createElement("h1");
   galleryTitle.id = "galleryTitle";
   galleryTitle.textContent = slidesTitle;
   galleryBox.appendChild(galleryTitle);
   
   let slideCounter = document.createElement("div");
   slideCounter.id = "slideCounter";
   slideCounter.textContent = currentSlide + "/" + imageCount;
   galleryBox.appendChild(slideCounter);
   
   let leftBox = document.createElement("div");
   leftBox.id = "leftBox";
   leftBox.innerHTML = "&#9664;";
   leftBox.onclick = moveToLeft;   
   galleryBox.appendChild(leftBox);
   
   let rightBox = document.createElement("div");
   rightBox.id = "rightBox";
   rightBox.innerHTML = "&#9654;";  
   rightBox.onclick = moveToRight;   
   galleryBox.appendChild(rightBox);
   
   let playPause = document.createElement("div");
   playPause.id = "playPause";
   playPause.innerHTML = "&#9199;";
   playPause.onclick = startStopShow;
   galleryBox.appendChild(playPause);
   
   let slideBox = document.createElement("div");
   slideBox.id = "slideBox";
   galleryBox.appendChild(slideBox);
   
   
   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createModal;
      slideBox.appendChild(image);
   }
   

   
   
   function moveToRight() {
      let firstImage = slideBox.firstElementChild.cloneNode("true");
      firstImage.onclick = createModal;
      slideBox.appendChild(firstImage);
      slideBox.removeChild(slideBox.firstElementChild);
      currentSlide++;
      if (currentSlide > imageCount) {
         currentSlide = 1;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;
   }
   
   function moveToLeft() {
      let lastImage = slideBox.lastElementChild.cloneNode("true");
      lastImage.onclick = createModal;
      slideBox.removeChild(slideBox.lastElementChild);
      slideBox.insertBefore(lastImage, slideBox.firstElementChild);
      currentSlide--;
      if (currentSlide === 0) {
         currentSlide = imageCount;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;      
   }  
   
   function startStopShow() {
      if (runShow) {
         showRunning = window.setInterval(moveToRight, 2000);
         runShow = false;
      } else {
         window.clearInterval(showRunning);
         runShow = true;
      }
   }
   
   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "activeModal";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);
      
      let modalImage = this.cloneNode("true");
      figureBox.appendChild(modalImage);
      
      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);
      
      let closeBox = document.createElement("div");
      closeBox.id = "modalClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(modalWindow);
      }
      
      modalWindow.appendChild(closeBox);
      
      document.body.appendChild(modalWindow);
   }
   
}

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("tabletContent");
  const toggleBtn = document.getElementById("toggleBtn");

  function isTabletViewport() {
    return window.innerWidth >= 768 && window.innerWidth <= 1024;
  }

  function toggleTabletContent() {
    if (isTabletViewport()) {
      content.style.display = content.style.display === "none" ? "block" : "none";
    } else {
      content.style.display = "none"; // Hide if not tablet
    }
  }

  toggleBtn.addEventListener("click", toggleTabletContent);

  // Optional: hide on load if not tablet
  if (!isTabletViewport()) {
    content.style.display = "none";
  }
});