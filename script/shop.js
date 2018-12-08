var prImg;
var count = true;
function changePhoto(img) {
	img.parentElement.parentElement.querySelector('.prime-img img').src = img.src;
	img.style = 'border: solid black 2 px';
}