// Navigation toggle

const navList = document.getElementById('nav-list');
const navBarToggle = document.getElementById('menu-toggle');
navBarToggle.addEventListener('click', function() {
	navList.classList.toggle('active');
});

// Close naviagtion bar once menu item is clicked

const navItem = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItem.length; i++) {
	navItem[i].addEventListener('click', function(event) {
		navList.classList.remove('active');
	});
}

// Removed class active on screen resize

window.addEventListener('resize', function() {
	if (window.innerWidth > 700) navList.classList.remove('active');
});
