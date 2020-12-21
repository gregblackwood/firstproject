const prev = document.getElementById('btnprev'),
      next = document.getElementById('btnnext'),
      slides = document.querySelectorAll('.slide'),
      categories = document.querySelectorAll('.category'),
      gyro = document.getElementById('gyro'),
      kick = document.getElementById('kick'),
      mono = document.getElementById('mono'),
      bike = document.getElementById('bike'),
      products = document.querySelectorAll('.products'),
      order = document.getElementById('button1');
      
let index = 0;

const activeSlide = n => {
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

const stopMotion = () => {
  clearInterval(interval);
}

const activeCategory = n => {
  for(category of categories) {
    category.classList.remove('activ');
  }
  categories[n].classList.add('activ');
}

const interval = setInterval(nextSlide, 2100);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
next.addEventListener('click', stopMotion);
prev.addEventListener('click', stopMotion);

const activeCategory1 = n => {
  activeCat(0);
}

const activeCategory2 = n => {
  activeCat(1);
}
const activeCategory3 = n => {
  activeCat(2);
}

const activeCat = n => {
  for(category of categories) {
    category.classList.remove('active1');
  }
  categories[n].classList.add('active1');
  showProducts(n);
}

const showProducts  = n => {
  for(product of products) {
    product.classList.remove('active2');
  }
  products[n].classList.add('active2');
}

gyro.addEventListener('click', activeCategory1);
kick.addEventListener('click', activeCategory2);
mono.addEventListener('click', activeCategory3);



