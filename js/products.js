document.querySelectorAll('.swiper').forEach((swiperEl) => {
  new Swiper(swiperEl, {
    slidesPerView: 5,
    spaceBetween: 16,
    slidesPerGroup: 2,

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 2,
      },
      400: {
        slidesPerView: 2,
        slidesPerGroup: 3,
      },
      576: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      900: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 2,
      },
    },

    navigation: {
      nextEl: swiperEl
        .closest('.carousel-wrapper')
        .querySelector('.swiper-button-next'),
      prevEl: swiperEl
        .closest('.carousel-wrapper')
        .querySelector('.swiper-button-prev'),
    },

    pagination: {
      el: swiperEl
        .closest('.carousel-wrapper')
        .querySelector('.swiper-pagination'),
      clickable: true,

      renderBullet: function (index, className) {
        if (index < 3) {
          return `<span class="${className}"></span>`;
        }
        return '';
      },
    },

    on: {
      breakpoint: function (swiper, params) {
        const wrapper = swiper.el.closest('.carousel-wrapper');
        const next = wrapper.querySelector('.swiper-button-next');
        const prev = wrapper.querySelector('.swiper-button-prev');
        const hide = params.slidesPerView <= 3;
        next.style.display = hide ? 'none' : '';
        prev.style.display = hide ? 'none' : '';
      },
    },
  });
});

const productsData = [
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
  {
    imgSrc: 'assets/images/product-tshirt-white-male.png',
    imgAlt: 'Camiseta branca masculina',
    name: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    originalPrice: 'R$ 100,00',
    discountedPrice: 'R$ 79,90',
    off: '10% OFF',
    installments: '10x de R$ 7,90',
  },
];

function createProductCard(product) {
  return `
    <li class="swiper-slide">
      <article class="product-card">
        <div class="product-image-container">
          <img class="product-image" src="${product.imgSrc}" alt="${product.imgAlt}" />
          <span class="product-badge-new">Novo</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price-row">
            <div class="product-prices">
              <p class="product-old-price"><s>${product.originalPrice}</s></p>
              <span class="product-price">${product.discountedPrice}</span>
            </div>
            <span class="product-badge-discount">${product.off}</span>
          </div>
          <p class="product-installments">Ou em até <strong>${product.installments}</strong></p>
        </div>
        <button class="product-btn-buy">Comprar</button>
      </article>
    </li>
  `;
}

const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
swiperWrappers.forEach((wrapper) => {
  wrapper.innerHTML = productsData.map(createProductCard).join('');
});
