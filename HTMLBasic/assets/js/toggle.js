const toggle = document.querySelector('.nav__toggle');
const linksContainer = document.querySelector('.nav__links-container');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) linksContainer.style.height = `${linksHeight}px`;
  else linksContainer.style.height = 0;
});
