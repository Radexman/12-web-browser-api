// ================== 04 requestAnimationFrame ================== //

const ball = document.querySelector('#ball');
let start;
let done = false;

const step = (timestamp) => {
	if (start === undefined) {
		start = timestamp;
	}

	const elapsed = timestamp - start;

	if (elapsed > 5000) {
		done = true;
	}

	if (done) {
		return;
	}

	ball.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 5}deg)`;

	requestAnimationFrame(step);
};

requestAnimationFrame(step);
