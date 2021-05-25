var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

//ECMAScript6
// const random_hex_color_code = () => {
// 	let n = (Math.random() * 0xfffff * 1000000).toString(16);
// 	return '#' + n.slice(0, 6);
// };

function random_hex_color_code() {
	var n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0,6);
}

function generateRandom() {
	color1.value = random_hex_color_code();
	color2.value = random_hex_color_code();

	changeColor();
}

function changeColor() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";
	css.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

random.addEventListener("click", generateRandom);