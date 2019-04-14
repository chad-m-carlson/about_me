const profilePic = document.querySelectorAll('.profilePic');
const profile = document.querySelectorAll('.profile');
const modal = document.getElementById('modal');
const historyPic = document.querySelectorAll('.pic');
const modalA = document.getElementById('modalA');



profilePic.forEach((x) => {
  x.addEventListener('mouseover', (e) => {
    x.classList.add('profilePicHover');
  });
});
profilePic.forEach((x) => {
  x.addEventListener('mouseleave', (e) => {
    x.classList.remove('profilePicHover');
  });
  x.addEventListener('click', (e) => {
    x.classList.remove('profilePicHover');
  });
});
profile.forEach((x) => {
  x.addEventListener('mouseover', (e) => {
    x.classList.add('profileHover');
  });
});
profile.forEach((x) => {
  x.addEventListener('mouseleave', (e) => {
    x.classList.remove('profileHover');
  });
});

profilePic.forEach((image) => {
  image.addEventListener('click', function (e) {
    const w = window.innerWidth / 3 - 250;
    const h = window.pageYOffset + 100;
    modal.innerHTML = `<img src=${e.target.src}>`;
    modal.setAttribute(`style`,`display: block; position: absolute; 
    margin-left: ${w}px; top: ${h}px`);
  });
});
modal.addEventListener('click', function () {
  this.style.display = 'none';
});

historyPic.forEach((image) => {
  image.addEventListener('click', function (e) {
    const w = window.innerWidth / 3 - 250;
    const h = window.pageYOffset + 100;
    modalA.innerHTML = `<img src=${e.target.src}>`;
    modalA.setAttribute(`style`,`display: block; position: absolute;
    margin-left: ${w}px; top: ${h}px`);
  });
});
modalA.addEventListener('click', function () {
  this.style.display = 'none';
});