const profilePic = document.querySelectorAll('.profilePic');
const profile = document.querySelectorAll('.profile');
const modal = document.getElementById('modal');
const historyPic = document.querySelectorAll('.pic');
const myDropdown = document.getElementById('myDropdown');
const dropbtn = document.getElementById('dropbtn');
const span = document.getElementsByClassName('close')[0];
const modalImg = document.getElementById('img01');
const screenshot = document.querySelectorAll('.screenshot')
const modalContent = document.querySelector('.modal-content')

// SMALL WINDOW DROPDOWN MENU 
dropbtn.addEventListener('click', (e) => {
  myDropdown.classList.toggle('show');
});

myDropdown.addEventListener('click', (e) => {
  myDropdown.classList.toggle('show');
});

// PROFILE CARD EFFECTS
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

//IMAGE MODAL BELOW
profilePic.forEach((image) => {
  image.addEventListener('click', function (e) {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});
historyPic.forEach((image) => {
  image.addEventListener('click', function(e) {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});
screenshot.forEach((image) => {
  image.addEventListener('click', function (e) {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

// modalContent.addEventListener(('click'), (e) => {
//   modalImg.classList.toggle('expand')
// });

span.onclick = function() {
  modal.style.display = 'none';
};