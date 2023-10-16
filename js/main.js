console.log('sad');

// Get elements from the DOM
const containers = document.querySelectorAll('.card-container');
const cards = document.querySelectorAll('.card');
// Page scroll ammount
let scrollY = 0;
// Set scroll event on the entire window
window.addEventListener('scroll', () => {
  // Get the scroll ammount
  scrollY = document.documentElement.scrollTop;
});
// loop throught all cards
for (let i = 0; i < cards.length; i++) {
  // Create new element for the light
  const light = document.createElement('span');
  // Add a class name
  light.setAttribute('class', 'light');
  // Append the new element to each card
  cards[i].appendChild(light);
  // Add a mousemove event to each card container
  containers[i].addEventListener('mousemove', (e) => {
    // Get mouse coordinates on X axis inside the card container
    const innerX = e.clientX - containers[i].offsetLeft;
    // Get mouse coordinates on Y axis inside the card containner, also adding the page scroll
    const innerY = e.clientY - containers[i].offsetTop + scrollY;

    // Move the light accoring to the mouse position
    light.style.left = innerX + 'px';
    light.style.top = innerY + 'px';
    // Add active class for the light
    light.classList.add('light-active');
    // Get half of the width and height of the card
    const x = cards[i].offsetWidth / 2;
    const y = cards[i].offsetHeight / 2;
    // Set intensity variables for booth axes
    const intensityX = 30;
    const intensityY = 10;
    // Reformat the coordinate values
    let convertX = ((innerX - x) * intensityX) / x;
    let convertY = ((innerY - y) * intensityY) / y;
    // Transform the card using the new values
    cards[i].style.transform = `rotateY(${
      convertX * -1
    }deg) rotateX(${convertY}deg)`;
  });

  // When the mouse Leaves the card container
  containers[i].addEventListener('mouseout', () => {
    // Remove active light class
    light.classList.remove('light-active');
    // Reset card rotation
    cards[i].style.transform = `rotateY(0deg)`;
  });
}
