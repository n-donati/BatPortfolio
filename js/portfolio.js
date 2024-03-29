// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('batcave-audio');
  audio.play();
  audio.volume = 0.1;
});

// SKILLS
document.addEventListener("DOMContentLoaded", function() {
  const skills = [
    { name: "C", image: "c_logo.png" },
    { name: "Docker", image: "docker_logo.png" },
    { name: "AWS", image: "aws_logo.png" },
    { name: "C++", image: "cpp_logo.png" },
    { name: "Django", image: "django_logo.png" },
    { name: "Firebase", image: "firebase_logo.png" },
    { name: "JavaScript", image: "js_logo.png" },
    { name: "Node.js", image: "node_logo.png" },
    { name: "MySQL", image: "mysql_logo.png" },
    { name: "TypeScript", image: "ts_logo.png" },
    { name: "React", image: "react_logo.png" },
    { name: "Vercel", image: "vercel_logo.png" },
    { name: "Python", image: "py_logo.png" },
    { name: "Tailwind", image: "tailwind_logo.png" },
    { name: "...", image: "upcoming.png" },
    { name: "Java", image: "java_logo.png" },
    { name: "...", image: "upcoming.png" },
    { name: "...", image: "upcoming.png" },
    { name: "HTML", image: "html_logo.png" },
    { name: "...", image: "upcoming.png" },
    { name: "Shell", image: "shell_logo.png" },
    { name: "CSS", image: "css_logo.png" },
    { name: "...", image: "upcoming.png" },
    { name: "SQL", image: "sql_logo.png" }
  ];

  const skillRows = document.querySelectorAll(".skill-row");

  skills.forEach((skill, index) => {
    const skillCircle = document.createElement("div");
    skillCircle.classList.add("skill-circle");
    skillCircle.dataset.skill = skill.name;

    const img = new Image();
    img.src = `../assets/characters/${skill.image}`;
    img.alt = skill.name;

    skillCircle.appendChild(img);
    skillRows[index % skillRows.length].appendChild(skillCircle);
  });
});


// HEADER HIDER / SHOWER
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-10.2rem";
  }
  prevScrollpos = currentScrollPos;
};


// Function to play menu sound
function playMenuSound(soundSrc) {
  const menuSound = new Audio(soundSrc);
  menuSound.play();
}

// Function to play menu move sound
function playMenuMoveSound() {
  playMenuSound("../assets/audios/MENUMOVE.WAV");
}

// Get all list items
const listItems = document.querySelectorAll("nav ul li");

// Add event listeners to each list item
listItems.forEach((item) => {
  // Add event listener to play menu move sound when hovering
  item.addEventListener("mouseenter", playMenuMoveSound);

  // Add event listener to play menu select sound when clicking
  item.addEventListener("click", () => {
    playMenuSound("../assets/audios/MENUSELECT.WAV");
  });
});


// OFFSETTER
document.querySelectorAll('nav a:not([href="../index.html"])').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offset = window.innerHeight / 2 - target.offsetHeight / 2; // Calculate the offset to center vertically

      window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
      });
  });
});

// SCROLL EFFECT
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".pop-in");
  var timeout;

  function toggleVisibility() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      var visible = [];
      elements.forEach(function(element) {
        if (isMostlyInViewport(element)) {
          visible.push(element);
        }
      });
      elements.forEach(function(element) {
        if (visible.includes(element)) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    }, 10); // Adjust debounce time as needed
  }

  toggleVisibility(); // Initial check

  window.addEventListener("scroll", toggleVisibility);

  function isMostlyInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var verticalThreshold = windowHeight * 0.02; // Adjust the threshold as needed
    var horizontalThreshold = windowWidth * 0; // Adjust the threshold as needed

    return (
      rect.top >= -verticalThreshold &&
      rect.left >= -horizontalThreshold &&
      rect.bottom <= windowHeight + verticalThreshold &&
      rect.right <= windowWidth + horizontalThreshold
    );
  }
});

// TYPER EFFECT
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const texts = ["I'm Batman.        ", "I'm Nicolas Donati."];
    let index = 0;
    let isTyping = true;
  
    function type() {
      const currentText = texts[index];
      const length = currentText.length;
      let i = 4; // Start from the end of "I'm "
  
      typingText.textContent = "I'm "; // Set the initial text
  
      function typingEffect() {
        if (isTyping && i < length) {
          typingText.textContent += currentText.charAt(i); // Append the next character
          i++;
          setTimeout(typingEffect, 150); // Adjust typing speed here
        } else {
          isTyping = false;
          setTimeout(erase, 1500); // Adjust delay before erasing text here
        }
      }
  
      function erase() {
        if (!isTyping && i > 4) { // Check if erasing is in progress and if i > 4 (to preserve "I'm ")
          typingText.textContent = "I'm " + currentText.substring(4, i - 1); // Preserve "I'm " and erase only the name
          i--;
          setTimeout(erase, 50); // Adjust erasing speed here
        } else {
          isTyping = true;
          index = (index + 1) % texts.length;
          setTimeout(type, 500); // Adjust delay before typing next text here
        }
      }
  
      typingEffect();
    }
  
    type(); // Start the typing effect
  });


// PLAY SOUND ON CIRCLE HOVER / CLICK
document.querySelectorAll('.skill-circle').forEach(circle => {
  circle.addEventListener('mouseover', () => {
    circle.classList.add('active');
  });

  circle.addEventListener('mouseout', () => {
    circle.classList.remove('active');
  });

  circle.addEventListener('click', () => {
    circle.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var hoverSound = document.getElementById("hoverSound");

  // Select all circles
  var circles = document.querySelectorAll(".skill-circle");

  // Add event listener to each circle
  circles.forEach(function(circle) {
    circle.addEventListener("mouseenter", function() {
      hoverSound.play(); // Play sound on hover
    });
  });
});




let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 2;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
        playMenuMoveSound();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
        playMenuMoveSound();
    }