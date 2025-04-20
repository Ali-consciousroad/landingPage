/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// Get the current year
document.getElementById("year").textContent = new Date().getFullYear(); 

// Add event listener to the icon
document.querySelector(".icon").addEventListener("click", myFunction);

// Function to toggle the responsive class on the navbar
function myFunction() {
  var x = document.getElementById("navbar__list");
  /* The `classList.toggle("responsive")` method is used to dynamically add 
  or remove the `"responsive"` class from the `navbar__list` element when the user clicks on the icon. */
  x.classList.toggle("responsive");
}

// Add scroll event listener to update active navbar link
window.addEventListener("scroll", function () {
    updateActiveLink();
});

// Add click event listener to navbar links
const navLinks = document.querySelectorAll(".topnav a");
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        updateActiveLink();
    });
});

// Function to update the active navbar link
function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".topnav a");

    // Find the current section in the viewport
    const currentSection = Array.from(sections).find((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        return sectionTop >= 0 && sectionTop < window.innerHeight / 2;
    });

    // Update the active class on navbar links
    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            currentSection && link.getAttribute("href") === `#${currentSection.id}`
        );
    });
}

// Add scroll and click event listeners
window.addEventListener("scroll", updateActiveLink);
document.querySelectorAll(".topnav a").forEach((link) =>
    link.addEventListener("click", updateActiveLink)
);

  