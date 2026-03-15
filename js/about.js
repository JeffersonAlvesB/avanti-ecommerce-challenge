const aboutData = {
  imgSrc: 'assets/images/product-mug-black-avanti.png',
  imgAlt: 'Caneca preta Avanti com logo',
  title: 'Lorem Ipsum',
  descriptions: [
    'Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.',
    'Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.',
  ],
  descriptionsMobile: [
    'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    'Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et.',
  ],
};

const createAboutSection = (data) => {
  const isMobile = window.innerWidth <= 768;
  const texts = isMobile ? data.descriptionsMobile : data.descriptions;

  return `
    <div class="container">
      <article class="product-about-content">
        <figure class="product-about-figure">
          <img class="product-about-image" src="${data.imgSrc}" alt="${data.imgAlt}" />
        </figure>
        <div class="product-about-text">
          <h2 class="product-about-title">${data.title}</h2>
          ${texts.map((p) => `<p class="product-about-description">${p}</p>`).join('')}
        </div>
      </article>
    </div>
  `;
};

document.querySelectorAll('.product-about').forEach((section) => {
  section.innerHTML = createAboutSection(aboutData);
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.product-about').forEach((section) => {
    section.innerHTML = createAboutSection(aboutData);
  });
});
