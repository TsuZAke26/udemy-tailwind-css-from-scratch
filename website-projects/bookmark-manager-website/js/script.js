const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', navToggle);
function navToggle() {
	// Toggle 'open' CSS class on menu button
	menuBtn.classList.toggle('open');

	// Switch 'hidden' for 'flex' on menu
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');

	// Update Logo icon based on menu state
	if (menu.classList.contains('hidden')) {
		logo.setAttribute('src', 'images/logo-bookmark.svg');
	} else {
		logo.setAttribute('src', 'images/logo-bookmark-footer.svg');
	}
}

tabs.forEach((tab) => {
	tab.addEventListener('click', onTabClick);
});
function onTabClick(e) {
	// Remove bottom border from all tabs
	tabs.forEach((tab) => {
		tab.children[0].classList.remove(
			'border-softRed',
			'border-b-4',
			'md:border-b-0'
		);
	});

	// Hide all panels
	panels.forEach((panel) => {
		panel.classList.add('hidden');
	});

	// Activate a new tab and panel based on the target
	e.target.classList.add('border-softRed', 'border-b-4');
	const classString = e.target.getAttribute('data-target');
	document
		.getElementById('panels')
		.getElementsByClassName(classString)[0]
		.classList.remove('hidden');
}
