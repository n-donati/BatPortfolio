document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loading-screen");
  const video = document.querySelector(".video");
  const blackOverlay = document.getElementById("black-overlay");
  const menuItems = document.querySelectorAll(".list li");
  const mainMenu = document.querySelector(".mainMenu");
  const socialMenu = document.querySelector(".socialMenu");
  const contactMe = document.getElementById("contact-me");
  const goBack = document.getElementById("go-back");

  let interactionHandled = false;

  function hideLoader() {
    loader.style.display = "none";
  }

  function playVideo() {
    video.muted = false;
    video.volume = 0.2;
    video.play();
    setTimeout(animateLogo, 1500);
    setTimeout(() => mainMenu.classList.add("show"), 3000);
  }

  function animateLogo() {
    document.querySelector(".logo-container").classList.add("animate-logo");
  }

  function playMenuSound(sound) {
    new Audio(sound).play();
  }

  function handleInteraction(event) {
    if (!interactionHandled) {
      interactionHandled = true;
      hideLoader();
      playVideo();
    }
  }

  function fadeOutVideo() {
    const fadeOutDuration = 800;
    const fadeOutInterval = 30;
    let volume = video.volume;
    const fadeOut = setInterval(() => {
      volume -= fadeOutInterval / fadeOutDuration;
      if (volume <= 0) {
        clearInterval(fadeOut);
        video.volume = 0;
      } else {
        video.volume = volume;
      }
    }, fadeOutInterval);
  }

  function handleMenuItemClick(event) {
    const item = event.currentTarget;
    const link = item.querySelector("a");
    const excludedItems = ["Curriculum Vitae", "Contact Me", "Linkedin", "Github", "Mail", "Discord", "GO BACK"];
    
    if (!excludedItems.includes(link.textContent)) {
      event.preventDefault();
      blackOverlay.style.opacity = "1";
      blackOverlay.style.pointerEvents = "auto";
      fadeOutVideo();
      
      // Special handling for Web Portfolio
      if (link.textContent === "Web Portfolio") {
        setTimeout(() => {
          window.location.href = link.getAttribute("href");
        }, 800);
      } else {
        // For other pages, remove the black overlay after transition
        setTimeout(() => {
          window.location.href = link.getAttribute("href");
          blackOverlay.style.opacity = "0";
          blackOverlay.style.pointerEvents = "none";
        }, 800);
      }
    }
  }

  function toggleMenus() {
    mainMenu.classList.toggle("show");
    socialMenu.classList.toggle("show");
  }

  // Event listeners
  document.addEventListener("keydown", handleInteraction);
  document.addEventListener("click", handleInteraction);
  document.addEventListener("touchstart", handleInteraction);

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => playMenuSound("../assets/audios/MENUMOVE.WAV"));
    item.addEventListener("click", (event) => {
      playMenuSound("../assets/audios/MENUSELECT.WAV");
      handleMenuItemClick(event);
    });
  });

  contactMe.addEventListener("click", toggleMenus);
  goBack.addEventListener("click", toggleMenus);

  // Handle black overlay for Web Portfolio when navigating back
  window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
      // Check if we're on the Web Portfolio page
      if (window.location.href.includes("web-portfolio")) {
        blackOverlay.style.opacity = "1";
        blackOverlay.style.pointerEvents = "auto";
      } else {
        blackOverlay.style.opacity = "0";
        blackOverlay.style.pointerEvents = "none";
      }
    }
  });
});