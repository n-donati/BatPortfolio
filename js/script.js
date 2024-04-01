document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loading-screen");
  const video = document.querySelector(".video");
  const blackOverlay = document.getElementById("black-overlay");
  const menuItems = document.querySelectorAll(".list li");

  function hideLoader() {
    loader.style.display = "none";
  }

  function playVideo() {
    video.muted = false;
    video.volume = 0.2;
    video.play();
    setTimeout(animateLogo, 1500);
    setTimeout(
      () => document.querySelector(".mainMenu").classList.add("show"),
      3000
    );
  }

  function animateLogo() {
    document.querySelector(".logo-container").classList.add("animate-logo");
  }

  function playMenuSound(sound) {
    new Audio(sound).play();
  }

  function playMenuMoveSound() {
    playMenuSound("../assets/audios/MENUMOVE.WAV");
  }

  const listItems = document.querySelectorAll(".list li");
  listItems.forEach((item) => {
    item.addEventListener("mouseenter", playMenuMoveSound);
    item.addEventListener("click", function () {
      playMenuSound("../assets/audios/MENUSELECT.WAV");
    });
  });

  // Event listeners
  document.addEventListener("keydown", handleInteraction);
  document.addEventListener("click", handleInteraction);
  document.addEventListener("touchstart", handleInteraction);

  // Functions
  let interactionHandled = false;

  function handleInteraction(event) {
    if (!interactionHandled) {
      interactionHandled = true;
      hideLoader();
      playVideo();
    }
  }

  // Add black overlay, exclude for Contact Me item
  menuItems.forEach((item) => {
    if (
      item.querySelector("a").textContent === "Contact Me" ||
      item.querySelector("a").textContent === "GO BACK" ||
      item.querySelector("a").textContent === "Linkedin" ||
      item.querySelector("a").textContent === "Github" ||
      item.querySelector("a").textContent === "Mail" ||
      item.querySelector("a").textContent === "Discord"
    )
      return;
    item.addEventListener("click", function () {
      event.preventDefault();
      blackOverlay.style.opacity = "1";
      blackOverlay.style.pointerEvents = "auto";
      fadeOutVideo();
      setTimeout(
        () =>
          (window.location.href = item.querySelector("a").getAttribute("href")),
        800
      );
    });
  });

  function fadeOutVideo() {
    const fadeOutDuration = 800;
    const fadeOutInterval = 30;
    let volume = 0.1;

    const fadeOutVideo = setInterval(() => {
      volume -= fadeOutInterval / fadeOutDuration;
      if (volume <= 0.0) {
        volume = 0.0;
        clearInterval(fadeOutVideo);
      }
      video.volume = volume;
    }, fadeOutInterval);
  }

  const contactMe = document.getElementById("contact-me");
  const goBack = document.getElementById("go-back");

  contactMe.addEventListener("click", function () {
    setTimeout(
      () => document.querySelector(".mainMenu").classList.remove("show"),
      200
    );
    setTimeout(
      () => document.querySelector(".socialMenu").classList.add("show"),
      200
    );
  });
  goBack.addEventListener("click", function () {
    setTimeout(
      () => document.querySelector(".socialMenu").classList.remove("show"),
      200
    );
    setTimeout(
      () => document.querySelector(".mainMenu").classList.add("show"),
      200
    );
  });
});
