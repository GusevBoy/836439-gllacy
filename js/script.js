
	var contacts__button = document.querySelector(".contacts__button");
	var overlay = document.querySelector(".popup-overlay");
	var feedback = document.querySelector(".popup-feedback");
	var feedback__close = feedback.querySelector(".feedback__close");
	var feedback__input = feedback.querySelector(".fedback__input");
	var feedback__name = feedback.querySelector("[name=name]");
	var feedback__email = feedback.querySelector("[name=email]");
	var feedback__textarea = feedback.querySelector(".feedback__textarea");

	contacts__button.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.add("popup-feedback_show");
		overlay.classList.add("popup-overlay_show");
		feedback__name.focus();
	});
	feedback__close.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedback.classList.remove("popup-feedback_show");
		overlay.classList.remove("popup-overlay_show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (feedback.classList.contains("popup-feedback_show")) {
				feedback.classList.remove("popup-feedback_show");
				overlay.classList.remove("popup-overlay_show");
			}
		}
	});
