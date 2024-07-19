document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");
	// hide menu on load
	// mobileMenu.classList.toggle("hidden");

	mobileMenuButton.addEventListener("click", function () {
		mobileMenu.classList.toggle("hidden");
	});
});
