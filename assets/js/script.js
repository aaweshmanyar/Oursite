'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



//Modal opening & Closing 
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
}

// Handle form submission
document.getElementById('contactForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from submitting
  // You can add your form submission logic here (e.g., AJAX request, validation, etc.)
  alert('Form submitted!'); // Replace with your actual form submission handling
  closeModal(); // Close the modal after form submission

  const inputFields = document.querySelectorAll('#contactForm input textarea');
  inputFields.forEach((field) => {
    field.value = ''; // Clear the value of each input field
  });
}


 // Send Data to the contact-form sheet
 const scriptURL = 'https://script.google.com/macros/s/AKfycbwID_IVbwvV9nNKkIczdV3mAHk4CpbLVQcVxR4ZqDIkZnFa3YmJo5Jq2qAuO2NWnr06/exec'
 const form = document.forms['submit-to-google-sheet']
 
 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => console.log('Success!', response))
     .catch(error => console.error('Error!', error.message))
 })