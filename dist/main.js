console.log(`Hello, world!`);

// Make the background of the body purple
document.body.style.backgroundColor = 'purple';

// make seven yellow squares
for (let i = 0; i < 7; i++) {
  const square = document.createElement('div');
  square.style.backgroundColor = 'yellow';
  square.style.width = '50px';
  square.style.height = '50px';
  document.body.appendChild(square);
}

// add a class of squares to the div    
document.body.className = 'squares';

// make the body flex   
document.body.style.display = 'flex';

// make the body flex direction row
document.body.style.flexDirection = 'row';

// add an image of a dog to the body
const img = document.createElement('img');
img.src = 'https://picsum.photos/600/400/?image=0';
document.body.appendChild(img);

// random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100 + 1);
