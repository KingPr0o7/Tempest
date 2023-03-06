// Elements // 
const titleBottom = document.getElementById('landing-title').getBoundingClientRect().y;
const scroll_containment = document.getElementById('scroll-wrapper');
const navbar = document.getElementById('navbar');
const links = document.getElementsByClassName('navbar-link');
const background = document.getElementById('background');
const titleFirst = document.getElementById('title-first');
const titleSecond = document.getElementById('title-second');
const audioControls = document.getElementById('audio-state');
var audioState = false;
const audio = new Audio("island-music.mp3");

const link_shakespeare_div = document.getElementById('shakespeare-div');
const link_play_div = document.getElementById('play-div');
const link_everything_div = document.getElementById('everything-div');
const link_library_div = document.getElementById('library-div');

const link_shakespeare = document.getElementById('button-link-shakespeare');
const link_play = document.getElementById('button-link-play');
const link_everything = document.getElementById('button-link-everything');
const link_library = document.getElementById('button-link-library');

const modal = document.getElementById('link-modal')
const modalX = document.getElementById('modal-exit')

const title = document.getElementById('modal-title')
const source = document.getElementById('source-detail');
const uses = document.getElementById('source-uses');
const desc = document.getElementById('source-desc');

// Events // 

// Dim Background
scroll_containment.addEventListener('scroll', () => {
	const scrollPos = scroll_containment.scrollTop
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

// Title Animation
window.addEventListener('load', function() {
	titleFirst.setAttribute('activated', '');
	setTimeout(function(){
		titleSecond.setAttribute('activated', '')
	}, 800)
})

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((el) => observer.observe(el));

// Audio Controls
audioControls.addEventListener('click', function() {
	if (audioState == false) {
		audioControls.src = '/images/icons/pause.svg';
		audio.play();
		audio.volume = 0.30;
		audio.loop = true;	
		audioState = true;		
	} else {
		audioControls.src = '/images/icons/play.svg';
		audio.pause();
		audioState = false;
	}
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

// Information of Link (Link Modals)
link_shakespeare.addEventListener('click', function() {
	show_modal('shakespeare');
});

link_play.addEventListener('click', function() {
	show_modal('play');
});

link_everything.addEventListener('click', function() {
	show_modal('everything');
});

link_library.addEventListener('click', function() {
	show_modal('library');
});

// Links //

// Related Links Page
document.getElementById("shakespeare-link").addEventListener("click", function() {
	window.open('https://www.britannica.com/biography/William-Shakespeare', '_blank');
});

document.getElementById("play-link").addEventListener("click", function() {
	window.open('http://shakespeare.mit.edu/tempest/index.html', '_blank');
});

document.getElementById("everything-link").addEventListener("click", function() {
	window.open('https://www.bellshakespeare.com.au/play-resources/the-tempest', '_blank');
});

document.getElementById("library-link").addEventListener("click", function() {
	window.open('https://www.folger.edu/explore/shakespeares-works/the-tempest/', '_blank');
});

// Credits Links Page
document.getElementById("ncp-link").addEventListener("click", function() {
	window.open('https://www.ncp.dev', '_blank');
});

document.getElementById("valerie-link").addEventListener("click", function() {
	window.open('https://www.valeriesparks.com.au/prosperosisland', '_blank');
});

document.getElementById("britannica-mit-link").addEventListener("click", function() {
	window.open('https://www.britannica.com/biography/William-Shakespeare', '_blank');
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

// Add Link Modal Suggested Uses
function addUse(text, cloneTo) {
	let use = document.createElement('li');
	use.textContent = text;
	cloneTo.appendChild(use)
}

// Add Link Modal Information
function show_modal(id) {
	let links = document.getElementsByClassName('link');
	for (let index = 0; index < links.length; index++) {
		links[index].removeAttribute('appear', '');
		links[index].setAttribute('disappear', '');
	}
	setTimeout(() => {
		link_shakespeare_div.style.display = 'none';
		link_play_div.style.display = 'none';
		link_everything_div.style.display = 'none';
		link_library_div.style.display = 'none';
	}, 500);
	if (id == 'shakespeare') {
		title.textContent = 'Learn About the Man Himself';
		source.textContent = 'Britannica';
		uses.textContent = '';
		addUse('Learn about the author\'s life', uses)
		addUse('Know his long lasting legacy', uses)
		addUse('See into his plays and poems', uses)
		addUse('View his career and college life', uses)
		desc.textContent = 'Find all details about Shakespeare himself! You can expect to learn about his life, career, legacy, plays, poems, sources, and even his private life. All information is in great detail, even with hyperlinks to related information. Don\'t like all that information, want something easier to follow? Click on the timeline to see events by date!';
	} else if  (id == 'play') {
		title.textContent = '"The Tempest" Full Online Play';
		source.textContent = 'Massachusetts Institute of Technology';
		uses.textContent = '';
		addUse('View the play', uses)
		addUse('Find specific acts, scenes, or the whole play', uses)
		desc.textContent = 'MIT brings you the whole book right online! View every act, scene, or everything on one page. There are no line indications, only which characters are speaking. The website isn\'t stylized, but its purpose is to show the play quickly to online users. Speed is often better than good-looking websites.';
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
		link_shakespeare_div.style.display = 'flex';
		link_play_div.style.display = 'flex';
		link_everything_div.style.display = 'flex';	
		link_library_div.style.display = 'flex';
	}, 500)
})