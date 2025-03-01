const header = document.getElementById('header');

// Sticky Header Effect
function onScroll(isAsync) {
	function useClasses(functionName, newClass, oppositeClass) {
		header.classList.remove(oppositeClass);
		header.classList.add(newClass);
		if (isAsync === false) {
			header.classList[functionName]('within-hero');
		} else {
			setTimeout(function () {
				header.classList[functionName]('within-hero');
			}, 1);
		}
	}
	if (window.scrollY > (window.innerHeight * 11) / 100) {
		useClasses('remove', 'remove-hero', 'prepare-hero');
	} else {
		useClasses('add', 'prepare-hero', 'remove-hero');
	}
}
window.onscroll = onScroll;
onScroll(false);

// Scroll smoothly to an element by its id
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) section.scrollIntoView({ behavior: 'smooth' });
}
