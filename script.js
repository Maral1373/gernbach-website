document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");
	// hide menu on load
	// mobileMenu.classList.toggle("hidden");

	mobileMenuButton.addEventListener("click", function () {
		mobileMenu.classList.toggle("hidden");
	});
});

document.querySelectorAll(".collapsible-header").forEach((button) => {
	button.addEventListener("click", () => {
		const content = button.nextElementSibling;
		const icon = button.querySelector("span:last-child");

		if (content.style.display === "block") {
			content.style.display = "none";
			icon.innerHTML = "&#9654;";
		} else {
			content.style.display = "block";
			icon.innerHTML = "&#9660;";
		}
	});
});
