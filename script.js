'use strict';

let searchbox = document.querySelector('input');

// Set placeholder depending on the hour of the day.
searchbox.placeholder = (function () {
	let hour = new Date().getHours();

	if (hour >= 6 && hour < 13) {
		return "good morning!";
	} else if (hour >= 13 && hour < 18) {
		return "good afternoon!";
	} else if (hour >= 18 && hour < 21) {
		return "good evening!";
	}
	else {
		return "good night!";
	}
})();

searchbox.addEventListener("keypress", function(event) {
	if (event.key == 'Enter') {
		// Value (string) of the <input> field when Enter was pressed.
		search(this.value);
	}
});

// Behold, the magical powers of JavaScript!
const ENGINES = {
	default: "https://www.google.com/#q=",

	"!a": "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=",
	"!y": "https://www.youtube.com/results?search_query=",
	"!w": "https://en.wikipedia.org/w/index.php?search=",
	"!m": "https://www.wolframalpha.com/input/?i=",
	"!s": "https://reddit.com/r/"
};

function search(query) {
	let engine = ENGINES.default;

	if (query[0] === "!") {
		engine = ENGINES[query.substr(0, 2)]; // We love hashes!
		query = query.substr(3);
	}

	window.location = engine + encodeURIComponent(query);
}
