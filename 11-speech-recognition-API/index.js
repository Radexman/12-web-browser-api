// ================== 15 Speech Recognition API ================== //

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = (e) => {
	let i = e.resultIndex;
	const acceptedColors = ['red', 'blue', 'green', 'yellow', 'pink', 'brown', 'purple', 'orange', 'black', 'white'];

	while (i < e.result.length) {
		const script = e.results[i][0].transcript.toLowerCase().trim();
		document.getElementById('output').textContent = script;

		if (acceptedColors.includes(script)) {
			document.body.style.backgroundColor = script;
		} else {
			alert('Please say a color');
		}
		i++;
	}
};

rec.start();
