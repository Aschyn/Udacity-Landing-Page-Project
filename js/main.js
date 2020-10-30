//Gets all sections with the class .landing__section and saves their ID and name
function getSections(){
  const sections = [...document.querySelectorAll('.landing__section')];
  const sections_data = [];

  for(section of sections){
    sections_data.push({'id':section.id , 'name':section.dataset.section_name});
  }
  createFragment(sections_data);
}
//Creates DOM Fragment and appends it to the nav ul
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

  document.querySelector('.nav').append(fragment);
}
getSections();


function dropDown(){
  const items = [...document.querySelectorAll('.nav__link')];
  for(item of items){
    if(!item.classList.contains('nav__open')){
      item.classList.toggle('hidden');
    }
  }
}

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

document.addEventListener('DOMContentLoaded', ()=>{
  activeNav();
})
