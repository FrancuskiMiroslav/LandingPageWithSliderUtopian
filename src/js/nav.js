document.addEventListener('DOMContentLoaded', function () {
	const topNav = document.getElementById('top-nav');

	window.addEventListener('scroll', (e) => {
		if (document.documentElement.scrollTop > 0) {
			topNav.classList.add('sticky');
			btnScrollToTop.style.opacity = 1;
		} else {
			topNav.classList.remove('sticky');
			btnScrollToTop.style.opacity = 0;
		}
	});
});
