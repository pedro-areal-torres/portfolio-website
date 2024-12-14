// Change active menu select on nav bar on user scroll
export const sectionActive = () => {
  const scrollY = window.pageYOffset + 1;
  const sections = document.querySelectorAll('section[id]');

  sections.forEach((current) => {
    let paddingPxl = 128;
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop,
      sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop - paddingPxl && scrollY < sectionTop + sectionHeight) {
      document.getElementById('nav__' + sectionId).classList.add('active');
      document.querySelector('.nav__menu-desktop a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.getElementById('nav__' + sectionId).classList.remove('active');
      document.querySelector('.nav__menu-desktop a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
};
