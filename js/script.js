
	var contacts__button = document.querySelector(".contacts__button");
	var feedback = document.querySelector(".feedback");
	var feedback__close = document.querySelector(".feedback__close");

	contacts__button.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.add("feedback_active");
	});
	feedback__close.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.remove("feedback_active");
	});
