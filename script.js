// A little JavaScript to make the mobile menu work.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', function () {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Close the mobile menu when a visitor chooses a section.
const menuLinks = navigation.querySelectorAll('a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

// Keep the copyright year up to date.
document.getElementById('year').textContent = new Date().getFullYear();
