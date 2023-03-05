const titleBottom = document.getElementById('landing-title').getBoundingClientRect().y;
const scroll_containment = document.getElementById('scroll-wrapper');
const navbar = document.getElementById('navbar');
const links = document.getElementsByClassName('navbar-link');
const background = document.getElementById('background');
const titleFirst = document.getElementById('title-first');
const titleSecond = document.getElementById('title-second');

const link_play_div = document.getElementById('play-div');
const link_overview_div = document.getElementById('overview-div');
const link_everything_div = document.getElementById('everything-div');

const link_play = document.getElementById('button-link-play');
const link_everything = document.getElementById('button-link-everything');

const modal = document.getElementById('link-modal')
const modalX = document.getElementById('modal-exit')

const title = document.getElementById('modal-title')
const source = document.getElementById('source-detail');
const uses = document.getElementById('source-uses');
const desc = document.getElementById('source-desc');

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
document.getElementById("play-link").addEventListener("click", function() {
	window.open('http://shakespeare.mit.edu/tempest/index.html', '_blank');
});

document.getElementById("everything-link").addEventListener("click", function() {
	window.open('https://www.bellshakespeare.com.au/play-resources/the-tempest', '_blank');
});

// Information of Link //
link_play.addEventListener('click', function() {
	show_modal('play');
});
link_everything.addEventListener('click', function() {
	show_modal('everything');
});

function show_modal(id) {
	let links = document.getElementsByClassName('link');
	for (let index = 0; index < links.length; index++) {
		links[index].removeAttribute('appear', '');
		links[index].setAttribute('disappear', '');
	}
	setTimeout(() => {
		link_play_div.style.display = 'none';
		link_everything_div.style.display = 'none';
	}, 500);
	if (id == 'play') {
		title.textContent = '"The Tempest" Full Online Play';
		source.textContent = 'Massachusetts Institute of Technology';
		uses.textContent = 'Fact Check';
		desc.textContent = 'Blah';
	} else if (id == 'everything') {
		title.textContent = 'Everything Tempest';
		source.textContent = 'Bell Shakespeare';
		uses.textContent = 'Fact Check';
		desc.textContent = 'Blah';		
	}
	modal.removeAttribute('disappear', '');
	modal.setAttribute('appear', '');
}

// Link Modal Close
modalX.addEventListener('click', function() {
	modal.removeAttribute('appear', '');
	modal.setAttribute('disappear', '');
	setTimeout(() => {
		let links = document.getElementsByClassName('link');
		for (let index = 0; index < links.length; index++) {
			links[index].removeAttribute('disappear', '');
			links[index].setAttribute('appear', '');
		}
		link_play_div.style.display = 'flex';
		link_everything_div.style.display = 'flex';	
	}, 500)
})