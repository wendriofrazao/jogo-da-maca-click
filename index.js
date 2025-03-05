const image = document.getElementById('image');
const clickCount = document.querySelector('p');

let counter = 0;

const handleClickImage = () => {
  counter++;
  clickCount.innerHTML = counter;

  if (counter === 1000) {
    clickCount.innerHTML = counter = 0;
  }
}

image?.addEventListener('click', handleClickImage);
