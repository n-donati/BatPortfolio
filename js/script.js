document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById("loading-screen");
  const video = document.querySelector(".video");

  function hideLoader() {
    loader.style.display = "none";
  }

  function playVideo() {
    video.muted = false;
    video.volume = 0.2;
    video.play();
    setTimeout(animateLogo, 1500);
    setTimeout(() => document.querySelector(".list").classList.add("show"), 3000);
  }

  function animateLogo() {
    document.querySelector(".logo-container").classList.add("animate-logo");
  }

  function playMenuSound(sound) {
    new Audio(sound).play();
  }

  function playMenuMoveSound() {
    playMenuSound('../assets/audios/MENUMOVE.WAV');
  }

  const listItems = document.querySelectorAll('.list li');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', playMenuMoveSound);
    item.addEventListener('click', function() {
      playMenuSound('../assets/audios/MENUSELECT.WAV');
    });
  });

  // Event listeners
  document.addEventListener("keydown", handleInteraction);
  document.addEventListener("click", handleInteraction);
  document.addEventListener("touchstart", handleInteraction);

  // Functions
  function handleInteraction(event) {
    hideLoader();
    playVideo();
  }

  const blackOverlay = document.getElementById('black-overlay');
  const content = document.getElementById('content');
  const menuItems = document.querySelectorAll('.list li');

  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      blackOverlay.style.opacity = '1';
      blackOverlay.style.pointerEvents = 'auto';
      fadeOutVideo();
      setTimeout(() => window.location.href = item.querySelector('a').getAttribute('href'), 800);
    });
  });

  function fadeOutVideo() {
    const fadeOutDuration = 800;
    const fadeOutInterval = 30;
    let volume = 0.1;

    const fadeOutVideo = setInterval(() => {
      volume -= fadeOutInterval / fadeOutDuration;
      if (volume <= 0.00) {
        volume = 0.00;
        clearInterval(fadeOutVideo);
      }
      video.volume = volume;
    }, fadeOutInterval);
  }
});
