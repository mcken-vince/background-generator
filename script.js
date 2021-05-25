var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


const randomHexColorCode = () => {
	var n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0,6);
}

const generateRandom = () => {
	color1.value = randomHexColorCode();
	color2.value = randomHexColorCode();

	changeColor();
}

const changeColor = () => {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
	css.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

random.addEventListener("click", generateRandom);