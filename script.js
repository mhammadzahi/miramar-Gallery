const searchButton = document.querySelector('button');
const input = document.querySelector('input');
const imageContainer = document.querySelector('.image-container');

function displayImages(images) {
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = image;
    imageContainer.appendChild(img);
  });
}

function getImages() {
  const folder = './images/'; // change this to your folder path
  fetch(folder)
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const html = parser.parseFromString(text, 'text/html');
      const links = html.querySelectorAll('a');
      const imageLinks = [];
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.endsWith('.jpg') || href.endsWith('.jpeg') || href.endsWith('.png') || href.endsWith('.gif')) {
          imageLinks.push(href);
        }
      });
      displayImages(imageLinks);
    });
}

searchButton.addEventListener('click', () => {
  const searchText = input.value.toLowerCase();
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    const altText = image.alt.toLowerCase();
    if (altText.includes(searchText)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});

getImages();
