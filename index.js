const titleBottom = document.getElementById('landing-title').getBoundingClientRect().y;
const scroll_containment = document.getElementById('scroll-wrapper');
const navbar = document.getElementById('navbar');
const links = document.getElementsByClassName('navbar-link');
const background = document.getElementById('background');
const titleFirst = document.getElementById('title-first');
const titleSecond = document.getElementById('title-second');

const link_play_div = document.getElementById('play-div');
const link_everything_div = document.getElementById('everything-div');
const link_library_div = document.getElementById('library-div');

const link_play = document.getElementById('button-link-play');
const link_everything = document.getElementById('button-link-everything');
const link_library = document.getElementById('button-link-library');

const modal = document.getElementById('link-modal')
const modalX = document.getElementById('modal-exit')

const title = document.getElementById('modal-title')
const source = document.getElementById('source-detail');
const uses = document.getElementById('source-uses');
const desc = document.getElementById('source-desc');

const audio = new Audio("island-music.mp3")
audio.play();
audio.volume = 0.30;
audio.loop = true;

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

document.getElementById("library-link").addEventListener("click", function() {
	window.open('https://www.folger.edu/explore/shakespeares-works/the-tempest/', '_blank');
});

document.getElementById("ncp-link").addEventListener("click", function() {
	window.open('https://www.ncp.dev', '_blank');
});

document.getElementById("valeries-link").addEventListener("click", function() {
	window.open('https://www.valeriesparks.com.au/prosperosisland', '_blank');
});

document.getElementById("shakespeare-mit-link").addEventListener("click", function() {
	window.open('http://shakespeare.mit.edu/tempest/index.html', '_blank');
});

document.getElementById("bell-shakespeare-link").addEventListener("click", function() {
	window.open('https://www.bellshakespeare.com.au/play-resources/the-tempest', '_blank');
});

document.getElementById("folger-link").addEventListener("click", function() {
	window.open('https://www.folger.edu/explore/shakespeares-works/the-tempest/', '_blank');
});

document.getElementById("juliush-link").addEventListener("click", function() {
	window.open('https://pixabay.com/sound-effects/sandy-beach-calm-waves-water-nature-sounds-8052/', '_blank');
});

// Information of Link //
link_play.addEventListener('click', function() {
	show_modal('play');
});
link_everything.addEventListener('click', function() {
	show_modal('everything');
});

link_library.addEventListener('click', function() {
	show_modal('library');
});

function addUse(text, cloneTo) {
	let use = document.createElement('li');
	use.textContent = text;
	cloneTo.appendChild(use)
}

function show_modal(id) {
	let links = document.getElementsByClassName('link');
	for (let index = 0; index < links.length; index++) {
		links[index].removeAttribute('appear', '');
		links[index].setAttribute('disappear', '');
	}
	setTimeout(() => {
		link_play_div.style.display = 'none';
		link_everything_div.style.display = 'none';
		link_library_div.style.display = 'none';
	}, 500);
	if (id == 'play') {
		title.textContent = '"The Tempest" Full Online Play';
		source.textContent = 'Massachusetts Institute of Technology';
		uses.textContent = '';
		addUse('View the play', uses)
		addUse('Find specific acts, scenes, or the whole play', uses)
		desc.textContent = 'MIT brings you the whole book right online! View every act, scene, or everything on one page. There are no line indications, only which characters are speaking.';
	} else if (id == 'everything') {
		title.textContent = 'Everything Tempest';
		source.textContent = 'Bell Shakespeare';
		uses.textContent = '';
		addUse('See detailed synopses of each act', uses);
		addUse('Find famous lines', uses);
		addUse('Have all key characters in detai', uses);
		addUse('Know detailed a historical background, fast facts, and debatable points', uses);
		addUse('Locate themes and imagery', uses);
		desc.textContent = 'A great place to find many things about the play "The Tempest." Such as themes, key characters, imagery, and even debatable points. Everything is highly detailed and broken up for you to explore. There are short descriptions; if you click them, you can see the whole portion. I can\'t emphasize how well they put it together, making it easy to follow and full of information. ';		
	} else if (id == 'library') {
		title.textContent = 'A Library for "The Tempest"';
		source.textContent = 'Folger Shakespeare Library';
		uses.textContent = '';
		addUse('Have a full synopsis', uses);
		addUse('See, download, or buy the play', uses);
		addUse('Search for anything', uses);
		addUse('Look at their collection of Tempest related history', uses);
		addUse('Find essays, resources, blog posts, and podcasts', uses);
		addUse('Admire the early printed texts', uses);
		desc.textContent = 'Folger brings you to a place to find the essentials and the niches. They show things like the whole play to even the early printed texts. They are very trusted and do their jobs well. Most people buy \'their\' version of the book (The book\'s contents aren\'t changed). It\'s also a notable place for teachers and students to learn and find unique things about the play. ';		
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
		link_library_div.style.display = 'flex';
	}, 500)
})