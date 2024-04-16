const toggleOn = document.querySelector(".toggle-icon");
const toggleOff = document.querySelector(".fa-xmark");
const navList = document.querySelector(".links");
const works = document.getElementById("works");

toggleOn.addEventListener('click', function() {
  navList.classList.add("active");
});
toggleOff.addEventListener('click', function() {
  navList.classList.remove("active");
}); 
works.addEventListener('click', function() {
  navList.classList.remove("active");
});

toggleOn.addEventListener('click', function() {
console.log('Clicked');
});