//Gets all sections with the class .landing__section and creates an object of their IDs and names
function getSections(){
  const sections = [...document.querySelectorAll('.landing__section')];
  const sections_data = [];

  for(section of sections){
    sections_data.push({'id':section.id , 'name':section.dataset.section_name});
  }
  createFragment(sections_data);
}

//Creates a DOM Fragment and appends it to the nav ul
function createFragment(section_objects){
  let fragment = document.createDocumentFragment();
  section_objects.forEach((obj, i) => {
    const a = document.createElement('a');
    a.setAttribute('class', 'nav__link');
    if(i === 0){
      a.setAttribute('class', 'nav__link active');
    }
    a.setAttribute('href', '#'+obj.id);
    a.setAttribute('data-section-ref', obj.id);
    a.innerHTML = `<li class='nav__item'>${obj.name}</li>`;
    fragment.append(a);
  });

  document.querySelector('.nav__list').append(fragment);
}

//Gets the position and if it intersects a section, it highlights the associated nav link
//Inspiration from https://css-tricks.com/sticky-smooth-active-nav/ (Tweaked for my use case)
function activeNav(){
  const section_links = document.querySelectorAll('.nav__link');
  const nav_height = document.querySelector('header').offsetHeight;
  window.addEventListener('scroll', e => {
    let posY = window.scrollY;
    section_links.forEach((link) => {
      let section = document.querySelector(link.hash);
      if((section.offsetTop  <= posY + nav_height) && (section.offsetTop + section.offsetHeight >= posY + nav_height)){
        link.classList.add('active');
      }else{
        link.classList.remove('active');
      }
    });
  })
}

//Show/Hide function when a section title is clicked
function toggleShow(section) {
  section.nextElementSibling.classList.toggle('hidden');
  if(section.nextElementSibling.classList.contains('hidden')){
      section.lastChild.innerHTML = "&#9660;";
  }else{
    section.lastChild.innerHTML = "&#9650";
  }

  section.parentElement.classList.toggle('shrink');
}

getSections();

//When the DOM is loaded, begin checking for scroll position
document.addEventListener('DOMContentLoaded', ()=>{
  activeNav();
});
