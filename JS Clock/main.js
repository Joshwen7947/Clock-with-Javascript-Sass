const hourHand = document.querySelector(`.hour-hand`);
const minuteHand = document.querySelector(`.min-hand`);
const secondsHand = document.querySelector(`.second-hand`);

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
