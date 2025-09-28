 const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.navbar ul');
  const navLinks = document.querySelectorAll('.navbar ul li a');
  const audio = document.getElementById('audio');


  // Play audio on page load
  window.addEventListener('load', () => {
      audio.play().catch(e => console.log("Audio play was prevented:", e));
    });

  // Keep icon in sync if audio ends or paused elsewhere
    audio.addEventListener('ended', () => {
      btn.querySelector('i').classList.remove('fa-pause');
      btn.querySelector('i').classList.add('fa-play');
      status.textContent = 'Paused';
    });
    audio.addEventListener('pause', () => {
      btn.querySelector('i').classList.remove('fa-pause');
      btn.querySelector('i').classList.add('fa-play');
      status.textContent = 'Paused';
    });
    audio.addEventListener('play', () => {
      btn.querySelector('i').classList.remove('fa-play');
      btn.querySelector('i').classList.add('fa-pause');
      status.textContent = 'Playing';
    });
    const btn = document.getElementById('play');
    const status = document.getElementById('status');
    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });     
    function toggleMenu() {
      navMenu.classList.toggle('active');
    }

  // Optional: close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
          navMenu.classList.remove('active');
      }
  });