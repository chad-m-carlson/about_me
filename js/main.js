const profilePic = document.querySelectorAll('.profilePic');
const profile = document.querySelectorAll('.profile');
const modal = document.getElementById('modal');
const historyPic = document.querySelectorAll('.pic');
const modalA = document.getElementById('modalA');
const myDropdown = document.getElementById('myDropdown');
const dropbtn = document.getElementById('dropbtn');
const span = document.getElementsByClassName('close')[0];
const modalImg = document.getElementById('img01');

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
span.onclick = function() {
  modal.style.display = 'none';
};