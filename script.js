const on = () => {

	let b1 = document.getElementById('image');
	b1.setAttribute('src', 'lightBulbOn.gif');

	let p1 = document.getElementById('par');
	p1.innerHTML = 'Light is ON'

}


const off = () => {

	let b1 = document.getElementById('image');
	b1.setAttribute('src', 'lightBulbOff.png'); 

	let p1 = document.getElementById('par');
	p1.innerHTML = 'Light is OFF'

}


const toggleBulb = () => {

	let b1 = document.getElementById('image');
	let srcV = b1.getAttribute('src');

	if (srcV == 'lightBulbOff.png') {
		on();

		let b2 = document.getElementById('onOffButton');
		b2.innerHTML = 'Turn off';
		
		let p1 = document.getElementById('par');
		p1.innerHTML = 'Light is ON'

	}

	else if (srcV == 'lightBulbOn.gif') {
		off();

		let b2 = document.getElementById('onOffButton');
		b2.innerHTML = 'Turn On';

		let p1 = document.getElementById('par');
		p1.innerHTML = 'Light is OFF'
	}

}