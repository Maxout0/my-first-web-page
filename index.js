 const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
   });

if (window.innerWidth <= 768){
  const nav =  document.querySelector(".nav-links");
  const dropDown = document.querySelector(".dropdown");
  const aboutLink = dropDown?.querySelector('a[href*="about"]');
  const contactLink = dropDown?.querySelector(".dropdown-menu a");

  if (nav && dropDown && aboutLink && contactLink) {
    const newAboutlink = aboutLink.cloneNode(true);
    const newContactlink = contactLink.cloneNode(true);

    dropDown.remove();

    nav.insertBefore(newAboutlink, nav.children[0]);
    nav.insertBefore(newContactlink, nav.children[1]);
  }
  
  

  
}
