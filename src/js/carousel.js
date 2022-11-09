document.addEventListener('DOMContentLoaded', function () {
	const carousel = document.getElementById('carousel');
	const prevBtn = document.getElementById('prev');
	const nextBtn = document.getElementById('next');
	const carouselUrl = './js/carousel.json';

	const localCarouselJSON = require('./carousel.json');

	const getCarouselSlides = async () => {
		/* 
		
		const response = await fetch(carouselUrl);
		const data = await response.json();
		const slides = data.slides; 
	
		*Please send over all the source files (SCSS and JS) and make sure that the page is displayed properly in the browser when clicking the index.html 

		Ovo sam tek primetio nakon što sam odradio sa fetch requestom da u zadatku stoji da mora da radi. I radi sve isto samo što dist/index.html neće slider da učita jer logično nije http request pa sam posle samo ubacio još jedan json kao dodatni module. Ako se gore komentovane tri const zamene sa dole const slides sve isto radi samo mora server. 
		
		*/

		const slides = localCarouselJSON.slides;

		slides.forEach((slide, slideNumber) => {
			const { desc, path, pathTab, pathMob } = slide;

			newSlide = document.createElement('div');
			newSlide.classList.add('carousel__slide');

			newSlide.innerHTML = `
                        <div class="carousel__content">
                            <h1 class="carousel__title">${desc}</h1>

                            <span class="carousel__desc">
                                from £69<sup><small>.50</small></sup>
                            </span>

                            <button class="carousel__cta">Book now!</button>
                        </div>
                    `;

			carousel.appendChild(newSlide);

			if (slideNumber === 0) {
				newSlide.classList.add('active');
			}

			let resizer = new ResizeObserver(handleResize);
			resizer.observe(newSlide);

			function handleResize(entries) {
				let slide = entries[0].target;

				if (entries[0].contentRect.width < 500) {
					slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${pathMob})`;

					if (pathMob == '') {
						slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${pathTab})`;
					}

					if (pathTab == '') {
						slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${path})`;
					}
				}

				if (
					entries[0].contentRect.width > 500 &&
					entries[0].contentRect.width < 800
				) {
					slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${pathTab})`;

					if (pathTab == '') {
						slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${path})`;
					}
				}

				if (entries[0].contentRect.width > 800) {
					slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${path})`;

					if (path == '') {
						slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${pathTab})`;
					}
				}
			}
		});
	};

	getCarouselSlides();

	nextBtn.addEventListener('click', () => {
		const activeSlide = document.querySelector('.carousel__slide.active');
		let nextSibling = activeSlide.nextElementSibling;

		if (nextSibling == null) {
			nextSibling = activeSlide;
		}

		if (nextSibling.classList.contains('carousel__slide')) {
			activeSlide.classList.remove('active');
			activeSlide.style.transform = 'translate(-100%)';
			nextSibling.classList.add('active');
			nextSibling.style.transform = 'translate(0)';
		}
	});

	prevBtn.addEventListener('click', (e) => {
		const activeSlide = document.querySelector('.carousel__slide.active');
		let nextSibling = activeSlide.previousElementSibling;

		if (nextSibling == null) {
			nextSibling = activeSlide;
		}

		if (nextSibling.classList.contains('carousel__slide')) {
			activeSlide.classList.remove('active');
			activeSlide.style.transform = 'translate(100%)';
			nextSibling.classList.add('active');
			nextSibling.style.transform = 'translate(0)';
		}
	});
});
