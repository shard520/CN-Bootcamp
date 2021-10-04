const image = document.querySelector('#cat');
const button = document.querySelector('#submit');

image.setAttribute('style', 'visibility: visible;');

const transitions = `
	opacity: 1;
	transform: rotate(360deg);
	will-change: transform, opacity;
	transition: transform 3s ease-in-out, opacity 4s;
`;

image.style = transitions;

button.addEventListener('click', () => {
  const isVisible = image.style.opacity === '1' ? 0 : 1;
  const isRotated = image.style.transform === 'rotate(360deg)' ? 0 : 360;

  image.style.opacity = isVisible;
  image.style.transform = `rotate(${isRotated}deg)`;
});
