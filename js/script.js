
	var contacts__button = document.querySelector(".contacts__button");
	var feedback = document.querySelector(".feedback");
	var feedback__close = document.querySelector(".feedback__close");
	var feedback__input = feedback.querySelector(".fedback__input");
	var feedback__name = feedback.querySelector("[name=name]");
	var feedback__email = feedback.querySelector("[name=email]");
	var feedback__textarea = feedback.querySelector(".feedback__textarea");

	contacts__button.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.add("feedback_active");
		feedback.classList.add("feedback_show");
		feedback__name.focus();
	});
	feedback__close.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.remove("feedback_active");
		feedback.classList.remove("feedback_show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			feedback.classList.remove("feedback_active");
			if (feedback.classList.contains("feedback_show")) {
				feedback.classList.remove("feedback_show");
			}
		}
	});
