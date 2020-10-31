# Udacity-Landing-Page-Project
Landing page project for Udacity Front End Development Nanodegree program.
## Dynamically Built Navigation
When the page is built, it looks for every section with the class ".landing__section" and stores its ID and is [data-section_name] attribute.
Then a DOM Fragment is created with an unordered list, populated by elements made with the section information and appended to the nav.
## Smooth Scrolling
This is achieved using the "scroll-behavior" style on the page.
## Active Navigation
Using Javascript, scrolling is observed and checks the scroll position relative to each section.
When the section is in view, the corresponding nav is set to active.
## Collapsing Sections
When the section headings are clicked, the section itself collapses to ease the length of the page.
