const titleBottom = document.getElementById('landing-title').getBoundingClientRect().bottom;
const scroll_containment = document.getElementById('scroll-wrapper');
const navbar = document.getElementById('navbar');
const links = document.getElementsByClassName('navbar-link');
const background = document.getElementById('background');
const titleFirst = document.getElementById('title-first');
const titleSecond = document.getElementById('title-second');


scroll_containment.addEventListener('scroll', () => {
	const scrollPos = scroll_containment.scrollTop
	console.log(scrollPos, titleBottom)
	if (scrollPos > titleBottom) {
		navbar.removeAttribute('deactivated', '');
		navbar.setAttribute('activated', '');
		background.removeAttribute('fadeIn', '');
		background.setAttribute('fadeOut', '');
	} else {
		navbar.removeAttribute('activated', '');
		navbar.setAttribute('deactivated', '');
		if (background.hasAttribute('fadeIn') || background.hasAttribute('fadeOut')) {
			background.removeAttribute('fadeOut', '');
			background.setAttribute('fadeIn', '');
		}
	}
});

window.addEventListener('load', function() {
	titleFirst.setAttribute('activated', '');
	setTimeout(function(){
		titleSecond.setAttribute('activated', '')
	}, 800)
})

// Smooth Anchor Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        var scrollTo = document.querySelector(this.getAttribute("href")).offsetTop;
        if (anchor.toString().includes("landing")) {
            scrollTo = document.body.offsetTop;
            scroll_containment.scrollTo({top: scrollTo, behavior: 'smooth'});
        } else {
            scroll_containment.scrollTo({top: scrollTo-100, behavior: 'smooth'});
        }
    });
});

// Links
document.getElementById("overview-link").addEventListener("click", function() {
	window.open('https://www.shakespeare.org.uk/explore-shakespeare/shakespedia/shakespeares-plays/tempest/', '_blank');
});