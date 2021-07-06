const sendButton = document.querySelector('.btn-button');
sendButton.addEventListener('click', handleClick);

function handleClick() {
	const buttonText = this.querySelector('btn-button-text');
	const sendIcon = this.querySelector('.icon-send');
	sendIcon.style.transform = `scale(0.5) translateX(-200px)`;
	buttonText.textContent = 'Sending';
	buttonText.classList.add('loading');
	buttonText.style.transform = `translateX(-10px)`;

	//fake loading state
	setTimeout(() => {
		buttonText.style.transform = `translateY(80px)`;
		buttonText.classList.remove('loading');
		sendIcon.style.transition = `1000ms ease 230ms`;
		sendIcon.style.transform = `scale(2) translateX(120px)`;
		sendIcon.addEventListener("webkitTransitionEnd", showSentText);
	}, 2000);
}

function showSentText() {
	const buttonText = document.querySelector('.btn-button-text');
	const iconCheck = document.querySelector('.icon-check');

	iconCheck.style.opacity	= `1`;

	buttonText.classList.add('notransition');
	buttonText.style.transform = `translateY(-80px)`;
	buttonText.textContent = 'Sent';
	buttonText.offsetHeight;
	buttonText.classList.remove('notransition');

	iconCheck.style.transform = `translateY(0px)`;
	buttonText.style.transform = `translateY(0px)`;

	sendButton.removeEventListener('click', handleClick);
}

function personalLink() {

}

function grpLink() {
	
}