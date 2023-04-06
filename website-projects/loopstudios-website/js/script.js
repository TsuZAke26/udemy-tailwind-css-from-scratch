const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
	// Toggle 'open' CSS class on menu button
	menuBtn.classList.toggle('open');

	// Switch 'hidden' for 'flex' on menu
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
}
