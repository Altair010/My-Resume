
const circles = document.querySelectorAll(".circle");
const isDestop = window.matchMedia('(min-width: 769px)').matches;


window.addEventListener("mousemove", function (e) {
  circles.forEach(function (circle) {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  });

  animateCircle(e);
});



function animateCircle(e) {
  circles.forEach(function (circle, index) {
    const offset = index * 5; // Add a small delay or offset for animation effect
    circle.style.left = e.clientX - 12 - offset + "px";
    circle.style.top = e.clientY - 12 - offset + "px";
  });
}







const isMobile = window.matchMedia('(max-width: 768px)').matches;
if (!isMobile) {
  const left = document.getElementById('left-part');
  const right = document.getElementById('right-part');

  left.addEventListener('wheel', function (e) {
    e.preventDefault(); // Stop the left side from scrolling
    right.scrollBy({
      top: e.deltaY, // Forward scroll to right part
      behavior: 'auto'
    });
  });

  left.style.overflow = "auto";

}



function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// // Track sections and set active button
// const sections = document.querySelectorAll("section");
// const Hover = document.querySelectorAll(".unique");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // remove old active
//         Hover.forEach(btn => btn.classList.remove("active"));
//         // add active to current
//         document.querySelector(`[onclick="scrollToSection('${entry.target.id}')"]`)
//                 .classList.add("active");
//       }
//     });
//   },
//   { threshold: 0.8 } // triggers when 60% of section is visible
// );

// sections.forEach(section => observer.observe(section));