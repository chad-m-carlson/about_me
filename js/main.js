const profilePic = document.querySelectorAll('.profilePic');

profilePic.forEach((pic) => {
  pic.addEventListener('click', (e) => {
    console.log(e);
  });
});