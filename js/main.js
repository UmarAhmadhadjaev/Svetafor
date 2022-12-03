let elRed = document.querySelector('.red');
let elYellow = document.querySelector('.yellow');
let elGreen = document.querySelector('.green');

setInterval(() => {
	setTimeout(() => {
		elRed.style.opacity = '1';
	}, 2000);
	setTimeout(() => {
		elRed.style.opacity = '0.4';
		elYellow.style.opacity = '1';
	}, 4000);

	setTimeout(() => {
		elYellow.style.opacity = '0.4';
	}, 4500);

	setTimeout(() => {
		elYellow.style.opacity = '1';
	}, 5000);

	setTimeout(() => {
		elYellow.style.opacity = '0.4';
	}, 5500);

	setTimeout(() => {
		elYellow.style.opacity = '1';
	}, 6000);

	setTimeout(() => {
		elYellow.style.opacity = '0.4';
		elGreen.style.opacity = '1';
	}, 8000);

	setTimeout(() => {
		elGreen.style.opacity = '0.4';
		elYellow.style.opacity = '1';
	}, 9500);

	setTimeout(() => {
		elYellow.style.opacity = '0.4';
	}, 10000);

	setTimeout(() => {
		elYellow.style.opacity = '1';
	}, 10500);

	setTimeout(() => {
		elYellow.style.opacity = '0.4';
	}, 11000);
}, 11000);
