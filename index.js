const titleBottom = document.getElementById('landing-title').getBoundingClientRect().bottom
const content = document.getElementById('website-container')

content.addEventListener('scroll', () => {
	const scrollPos = content.scrollTop
	console.log(scrollPos, titleBottom)
	if (scrollPos > titleBottom) {
		document.getElementById('navbar').removeAttribute('deactivated', '');
		document.getElementById('navbar').setAttribute('activated', '');
	} else {
		document.getElementById('navbar').removeAttribute('activated', '');
		document.getElementById('navbar').setAttribute('deactivated', '');
	}
});

console.log('CONNECTED')