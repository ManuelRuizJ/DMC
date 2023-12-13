/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let translateValue = 0;
  
    function nextSlide() {
      if (translateValue > -(slider.children.length - 1) * 100) {
        translateValue -= 100;
      } else {
        translateValue = 0;
      }
      slider.style.transform = `translateX(${translateValue}%)`;
    }
  
    function prevSlide() {
      if (translateValue < 0) {
        translateValue += 100;
      } else {
        translateValue = -(slider.children.length - 1) * 100;
      }
      slider.style.transform = `translateX(${translateValue}%)`;
    }
  
    document.querySelector('.slider-container').addEventListener('click', function (event) {
      if (event.target.classList.contains('next-btn')) {
        nextSlide();
      } else if (event.target.classList.contains('prev-btn')) {
        prevSlide();
      }
    });
  });
  