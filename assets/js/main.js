// Reassembles obfuscated e-mail links at runtime so the address never
// appears in the static HTML, which keeps it out of reach of scrapers
// that only read raw page source.
document.querySelectorAll("[data-email-user]").forEach(function (el) {
	var address = el.getAttribute("data-email-user") + "@" + el.getAttribute("data-email-domain");
	el.href = "mailto:" + address;
	el.textContent = address;
});

// Opens a <details> accordion item when linked to directly via URL
// fragment (e.g. software.html#arrabida), since not all browsers
// auto-expand <details> on fragment navigation.
if (location.hash) {
	var target = document.querySelector(location.hash);
	if (target && target.tagName === "DETAILS") {
		target.open = true;
		target.scrollIntoView();
	}
}
