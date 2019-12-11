
function modal1open() {
	document.getElementById("berlin-modal").classList.remove('hidden');
	document.getElementById("modal-backdrop").classList.remove('hidden');
}
function modal2open() {
	document.getElementById("munich-modal").classList.remove('hidden');
	document.getElementById("modal-backdrop").classList.remove('hidden');
}

function modal3open() {
	document.getElementById("hamburg-modal").classList.remove('hidden');
	document.getElementById("modal-backdrop").classList.remove('hidden');
}

var berlin = document.querySelector('#button1');
berlin.addEventListener('click', modal1open);

var munich = document.querySelector('#button2');
munich.addEventListener('click', modal2open);

var hamburg = document.querySelector('#button3');
hamburg.addEventListener('click', modal3open);

function modal1close() {
	document.getElementById("berlin-modal").classList.add('hidden');
	document.getElementById("modal-backdrop").classList.add('hidden');
}

function modal2close() {
	document.getElementById("munich-modal").classList.add('hidden');
	document.getElementById("modal-backdrop").classList.add('hidden');
}

function modal3close() {
	document.getElementById("hamburg-modal").classList.add('hidden');
	document.getElementById("modal-backdrop").classList.add('hidden');
}

var clo1 = document.querySelector('#modal-close-berlin');
clo1.addEventListener('click', modal1close);

var clo2 = document.querySelector('#modal-close-munich');
clo2.addEventListener('click', modal2close);

var clo3 = document.querySelector('#modal-close-hamburg');
clo3.addEventListener('click', modal3close);