"use strict"
var linkFaqOpen = document.querySelectorAll('.faq-section__link');

const faqTipOpen = (e) => {
	var el = e.target;
	var tip = el.closest('.faq-section__link').nextElementSibling;
	if (el.children.length == 1) {
		var btn = el.children[0];
	} else {
		btn = el;
	}
	if (tip.style.display == "" || tip.style.display == "none") {
		tip.style.display = "block";
		tip.style.maxHeight = tip.scrollHeight + 'px';
		btn.style.transform = "rotate(90deg)";
	} else {
		tip.style.maxHeight = "0";

		tip.addEventListener('transitionend', () => {
			tip.style.display = 'none';
			btn.style.transform = "rotate(0deg)";
		}, { once: true });

	}
}

linkFaqOpen.forEach((linkFaqOpen) => {
	linkFaqOpen.addEventListener('click', faqTipOpen)
});