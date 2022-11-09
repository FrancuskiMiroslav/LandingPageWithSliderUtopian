document.addEventListener('DOMContentLoaded', function () {
	const carousel = document.getElementById('carousel');

	let firstSlide;
	let lastSlide;

	function getJsonData() {
		return new Promise((resolve, reject) => {
			fetch('./js/carousel.json')
				.then((resp) => resp.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	async function displayCarousel() {
		const dataList = await getJsonData();

		dataList.slides.forEach((slide, slideNumber) => {
			newSlide = document.createElement('div');
			newSlide.classList.add('carousel__slide');
			newSlide.dataset.slide = slideNumber

			const { 
				title,
				desc,
				path,
				pathTab,
				pathMob
			} = slide

			newSlide.innerHTML = `
						<div class="carousel__hero">
							<div class="carousel__hero-img">
								<picture class="carousel__picture" >
									<!-- mobile image -->
									<source
									srcset="${pathMob}"
									media="all and (max-width:576px)"
									>
									<!-- tablet image -->
									<source
									srcset="${pathTab}"
									media="all and (min-width:991px) and (max-width:1199px)"
									>
									<!-- desktop image -->
									<source
									srcset="${path}"
									media="all and (min-width:1200px)"
									>
									<!-- default image as a fallback -->
									<img src="${path}"
									class="carousel__image"
									alt="Alt"
									loading="eager">
								</picture>
							</div>
							<div class="carousel__btns">
							<button class="carousel__btn btn-left" id="prev">
							</button>

							<button class="carousel__btn btn-right" id="next">
							</button>
						</div>

						<div class="carousel__content">
							<p class="carousel__desc">
								${desc}
							</p>

							<h2 class="carousel__title">
								${title}
							</h2>
						</div>
					</div>
				`;

			carousel.appendChild(newSlide);

			if (slideNumber === 0) {
				firstSlide = newSlide;
				newSlide.classList.add('active');
			} else if (slideNumber + 1 === dataList.slides.length) {
				lastSlide = newSlide;
			}
		});

		nextSlide();
		displayActiveSlide();
		handleActiveSlideOnClick();
	}

	function nextSlide() {
		const nextBtn = document.querySelectorAll('.btn-right');

		nextBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				const activeSlide = document.querySelector('.carousel__slide.active');
				const firstSlide = document.querySelector('.carousel__slide')
				let nextSibling = activeSlide.nextElementSibling;

				if (nextSibling == null) {
					nextSibling = activeSlide;
				}

				if (nextSibling.classList.contains('carousel__slide') && !nextSibling.classList.contains('active')) {
					activeSlide.classList.remove('active');
					nextSibling.classList.add('active');
				} else {
					// infinite loop
					activeSlide.classList.remove('active');
					firstSlide.classList.add('active');
				}
			});
		});
	}

	function displayActiveSlide () {
		const dots = document.querySelectorAll('.carousel__dot')
		const activeSlide = document.querySelector('.carousel__slide.active')

		dots.forEach((dot, index) => {
			if (dot.dataset.forDot === activeSlide.dataset.slide) {
				dot.classList.add('active')
			} else {
				dot.classList.remove('active')
			}
		})
	}

	function handleActiveSlideOnClick() {
		const dots = document.querySelectorAll('.carousel__dot')
		
		
		const slides = document.querySelectorAll('.carousel__slide')
		

		dots.forEach((dot, dotIndex) => {
			dot.addEventListener('click', (e) => {
				const activeDot = document.querySelector('.carousel__dot.active')
				const activeSlide = document.querySelector('.carousel__slide.active')
				if (dot.classList.contains('active')) {
					return
				}

				slides.forEach((slide, slideIndex) => {
					
					if (dot.classList.contains('active') && slide.classList.contains('active')) {
						return
					}

					if (dotIndex !== slideIndex) {
						activeDot.classList.remove('active')
						activeSlide.classList.remove('active')
					}
					
					if (dotIndex === slideIndex) {
						slide.classList.add('active')
						dot.classList.add('active')
					}
				})
			})
		})
	}

	let autoplayInterval = setInterval(function() {
    document.getElementById("next").click();
	displayActiveSlide();
  	}, 4000);

	(function () {
		displayCarousel();
	})();
});
