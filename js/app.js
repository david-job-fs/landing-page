/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
const navigation = document.getElementById('navbar__list');

// build the navighation items and links
for (let section of sections) {
	const sectionTitle = section.querySelector('h2')

	const listItem = document.createElement('li');
	const link = document.createElement('a');

    link.textContent = sectionTitle.textContent;
    link.setAttribute('class', 'menu__link');
    link.setAttribute('href', '#' + section.id );
    link.setAttribute('title', sectionTitle.textContent );

    listItem.appendChild(link);

    navigation.appendChild(listItem);

}


// EventListener is adding class 'active' to section and navigation when it is in viewport
window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
				document.querySelector(`section[id="${id}"] h2`).classList.add('active');

			} else {
				document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
				document.querySelector(`section[id="${id}"] h2`).classList.remove('active');
			}
		});
	}, {rootMargin: "-300px 0px -200px 0px"});

	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});
