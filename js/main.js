document.addEventListener("DOMContentLoaded", () => {
  const scrollLink = document.querySelector(".scroll-indicator");

  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = scrollLink.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

var form = document.getElementById("contactForm");
var btnText = document.getElementById("btnText");
var submitBtn = document.getElementById("submitBtn");
var formstatus = document.getElementById("formResponse");

async function handleSubmit(event) {
  event.preventDefault();

  // UI Feedback: Start loading
  formstatus.classList.remove("d-none");
  formstatus.innerHTML = "Sending...";
  submitBtn.disabled = true;
  btnText.innerHTML = "Sending...";

  var data = new FormData(event.target);

  fetch(event.target.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        formstatus.innerHTML = "Thanks for your submission!";
        formstatus.classList.replace("text-danger", "text-success");
        btnText.innerHTML = "Sent";
        form.reset();
      } else {
        response.json().then((data) => {
          formstatus.classList.add("text-danger");
          if (Object.hasOwn(data, "errors")) {
            formstatus.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            formstatus.innerHTML = "Oops! There was a problem submitting your form";
          }
          resetButton();
        });
      }
    })
    .catch((error) => {
      formstatus.classList.add("text-danger");
      formstatus.innerHTML = "Oops! There was a problem connecting to the server";
      resetButton();
    });
}

function resetButton() {
  submitBtn.disabled = false;
  btnText.innerHTML = "Submit Inquiry";
}

form.addEventListener("submit", handleSubmit);

const scroller = document.getElementById('systemScroller');
const dots = document.querySelectorAll('.dot');

// Function to scroll to a specific card
function scrollToCard(index) {
    const cardWidth = scroller.querySelector('.solution-card').offsetWidth;
    // On desktop we show 3 cards, so index might need adjustment 
    // depending on if you want to scroll card-by-card or page-by-page.
    scroller.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
    });
}

// Function to highlight dots based on scroll position
scroller.addEventListener('scroll', () => {
    const cardWidth = scroller.querySelector('.solution-card').offsetWidth;
    const activeIndex = Math.round(scroller.scrollLeft / cardWidth);
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
});

document.querySelector('.navbar-brand').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.toggle('dark-theme');
    
    // Save the state
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}