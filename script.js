// ✅ Animation sur la page À propos
const aboutText = document.querySelector('.about p');
if (aboutText) {
  aboutText.style.opacity = 0;
  aboutText.style.transform = 'translateY(20px)';
  window.addEventListener('scroll', () => {
    const rect = aboutText.getBoundingClientRect().top;
    if (rect < window.innerHeight - 150) {
      aboutText.style.transition = 'all 1s ease';
      aboutText.style.opacity = 1;
      aboutText.style.transform = 'translateY(0)';
    }
  });
}

// ✅ Effet smooth scroll sur tous les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ✅ Message automatique sur la page de confirmation
const confirmationText = document.querySelector('.confirmation-box h2');
if (confirmationText) {
  confirmationText.style.opacity = 0;
  setTimeout(() => {
    confirmationText.style.transition = 'opacity 1s ease';
    confirmationText.style.opacity = 1;
  }, 700);
}

// ✅ Animation du bouton "Envoyer" (page contact)
const contactBtn = document.querySelector('#contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    contactBtn.classList.add('btn-success');
    contactBtn.innerHTML = '<i class="bi bi-check-circle"></i> Envoyé !';
    setTimeout(() => {
      contactBtn.classList.remove('btn-success');
      contactBtn.innerHTML = 'Envoyer le message';
    }, 3000);
  });
}