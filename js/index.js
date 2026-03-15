/* ---- SISTEMA DE BUSCA ---- */
document.querySelectorAll('.search-wrapper').forEach((wrapper) => {
  const searchInput = wrapper.querySelector('.search-input');
  const searchBtn = wrapper.querySelector('.search-btn');
  const searchResult = wrapper.querySelector('.search-result');
  const searchResultTerm = wrapper.querySelector('.search-result-term');
  const searchResultClose = wrapper.querySelector('.search-result-close');

  searchBtn.addEventListener('click', () => {
    const term = searchInput.value.trim();
    if (!term) return;

    searchResultTerm.textContent = term;
    searchResult.style.display = 'flex';
    searchInput.value = '';
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBtn.click();
    }
  });

  searchResultClose.addEventListener('click', () => {
    searchResult.style.display = 'none';
    searchResultTerm.textContent = '';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    document.querySelectorAll('.search-result').forEach((r) => {
      r.style.display = 'none';
    });
  }
});

/* ---- MENU DE NAVEGAÇÃO ---- */
const nav = document.querySelector('.navigation');
const megaMenu = document.querySelector('.mega-menu');
const deptMenu = document.querySelector('.dept-menu');
const navCategories = document.querySelector('.nav-categories');
const deptItems = document.querySelectorAll('.nav-item:not(.nav-categories)');

let showTimer = null;
let hideTimer = null;

function showMenu(menu) {
  clearTimeout(hideTimer);
  clearTimeout(showTimer);

  showTimer = setTimeout(() => {
    [megaMenu, deptMenu].forEach((m) => {
      m.style.display = 'none';
      m.style.opacity = '0';
    });

    menu.style.display = 'flex';
    requestAnimationFrame(() => {
      menu.style.opacity = '1';
    });
  }, 150);
}

function hideAll() {
  clearTimeout(showTimer);

  hideTimer = setTimeout(() => {
    [megaMenu, deptMenu].forEach((m) => {
      m.style.opacity = '0';
      setTimeout(() => {
        m.style.display = 'none';
      }, 250);
    });
  }, 300);
}

navCategories.addEventListener('mouseenter', () => showMenu(megaMenu));

deptItems.forEach((item) =>
  item.addEventListener('mouseenter', () => showMenu(deptMenu)),
);

nav.addEventListener('mouseleave', hideAll);

/* ---- CARROSSEL MOBILE (HERO) ---- */
const heroCarousel = document.querySelector('.hero-mobile__carousel');

if (heroCarousel) {
  const track = heroCarousel.querySelector('.hero-mobile__track');
  const items = heroCarousel.querySelectorAll('.hero-mobile__item');

  const dotsContainer = heroCarousel
    .closest('.hero-mobile')
    .querySelector('.hero-mobile__dots');

  let current = 0;

  items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('hero-mobile__dot');
    if (i === 0) dot.classList.add('hero-mobile__dot--active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.hero-mobile__dot').forEach((dot, i) => {
      dot.classList.toggle('hero-mobile__dot--active', i === current);
    });
  }

  let startX = 0;

  heroCarousel.addEventListener(
    'touchstart',
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  heroCarousel.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo((current + 1) % items.length);
      else goTo((current - 1 + items.length) % items.length);
    }
  });
}

/* ---- ACCORDION DO FOOTER (MOBILE) ---- */
function initFooterAccordion() {
  if (window.innerWidth > 768) return;

  const triggers = document.querySelectorAll(
    '.footer-nav-title, .footer-contact-title',
  );

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.footer-nav, .footer-contact');
      const isOpen = parent.classList.contains('is-open');

      document
        .querySelectorAll('.footer-nav, .footer-contact')
        .forEach((el) => {
          el.classList.remove('is-open');
        });

      if (!isOpen) parent.classList.add('is-open');
    });
  });
}

document.addEventListener('DOMContentLoaded', initFooterAccordion);
