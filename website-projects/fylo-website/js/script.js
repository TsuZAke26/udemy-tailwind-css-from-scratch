const themeToggleBtn = document.getElementById('theme-toggle');
const themeTogggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Control visibility of icon on burron button
if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	themeToggleLightIcon.classList.remove('hidden');
} else {
	themeTogggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
	// Toggle icon
	themeTogggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	// Update Local Storage
	if (localStorage.getItem('color-theme')) {
		// Saved theme is light
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
		// Saved theme is dark
		else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	}
	// Initiate Local Storage
	else {
		// Initiate Local Storage with light
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
		// Initiate Local Storage with dark
		else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
	}
}
