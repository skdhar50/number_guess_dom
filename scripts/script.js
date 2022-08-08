// Random number from 1 to 10
let random_number = Math.floor(Math.random() * 10) + 1;

// variables
let chances_left = document.querySelector(".chances_left");
let chance_message = document.querySelector(".chance_message");
let reset_btn = document.querySelector(".reset_btn");
let success = document.querySelector(".success");
let failed = document.querySelector(".failed");
let hint_msg = document.querySelector(".hint_msg");
let hints = document.querySelector(".hints");
let input_form = document.querySelector(".input_form");
let number = document.getElementById("number");
let enter_btn = document.querySelector(".enter_btn");

// total chances
let total_chances = 3;

// hide any section
function hide_section(element) {
	element.classList.add("hidden");
}

// show any section
function show_section(element) {
	element.classList.remove("hidden");
}

// show hints
function show_hints(message) {
	show_section(hints);
	hint_msg.textContent = message;
}

// show success or failure message
function show_checking_status(status) {
	hide_section(input_form);
	hide_section(hints);
	show_section(status);
	show_section(reset_btn);
	hide_section(chance_message);
}

// reset to default
function reset_all() {
	random_number = Math.floor(Math.random() * 10) + 1;
	chances_left.textContent = 3;
	total_chances = 3;

	show_section(input_form);
	show_section(chance_message);
	hide_section(success);
	hide_section(failed);
	hide_section(hints);
	hide_section(reset_btn);
}

// check the input number
function check_guess() {
	if (parseInt(number.value) === random_number) {
		show_checking_status(success);
	} else {
		chances_left.textContent = --total_chances;

		if (total_chances === 0) {
			show_checking_status(failed);
		} else {
			if (parseInt(number.value) < random_number) {
				show_hints("Your guess is smaller");
			} else if (parseInt(number.value) > random_number) {
				show_hints("Your guess is greater");
			}
		}
	}
	number.value = "";
}

enter_btn.addEventListener("click", check_guess);
reset_btn.addEventListener("click", reset_all);
