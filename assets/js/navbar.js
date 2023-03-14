window.onload = () => {
  const { pathname } = window.location;
  if (pathname === "/") {
    console.log(pathname);
  }
};

const closebtn = document.getElementById("close-btn");
const openbtn = document.querySelector(".hamburger");
closebtn.addEventListener("click", () => {
  closebtn.parentElement.classList.toggle("hidden");
});
openbtn.addEventListener("click", () => {
  closebtn.parentElement.classList.toggle("hidden");
});

// Get the button:
let mybutton = document.getElementById("stt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
mybutton.addEventListener("click", topFunction);
