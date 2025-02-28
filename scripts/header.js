const header = document.getElementById('header');

// Sticky Header Effect
window.onscroll = async function myFunction() {
	async function useClasses(functionName, newClass, oppositeClass) {
		header.classList.remove(oppositeClass);
		header.classList.add(newClass);
		setTimeout(function () {
			header.classList[functionName]('fixed');
		}, 1);
	}
	if (window.scrollY > (window.innerHeight * 11) / 100) {
		useClasses('add', 'prepare-fixed', 'remove-fixed');
	} else {
		useClasses('remove', 'remove-fixed', 'prepare-fixed');
	}
};

// Scroll smoothly to an element by its id
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) section.scrollIntoView({ behavior: 'smooth' });
}
