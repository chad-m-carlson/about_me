const profilePic = document.querySelectorAll('.profilePic');
const profile = document.querySelectorAll('.profile');
const modal = document.getElementById('modal');
const w = window.innerWidth / 4;
const h = window.innerHeight / 4;



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
    modal.innerHTML = `<img src=${e.target.src}>`;
    modal.style.display = 'block';
    modal.style.margin = `${w}px ${h}px`;
    modal.style.position = 'absolute';
  });
});
modal.addEventListener('click', function () {
  this.style.display = 'none';
});