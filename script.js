const emojiContainer = document.getElementById("emoji-container");
const searchInput = document.getElementById("main-search");

// Function to render emojis
const displayEmojis = (list) => {
	emojiContainer.innerHTML = "";

	list.forEach((emoji) => {
		const card = document.createElement("div");
		card.classList.add("emoji-card");

		card.innerHTML = `
            <span class="char">${emoji.emoji}</span>
            <p class="name">${emoji.description}</p>
            <p class="tags">${emoji.tags.join(", ")}</p>
        `;

		// Click Event for Rotation Animation
		card.addEventListener("click", () => {
			const emojiChar = card.querySelector(".char");

			emojiChar.classList.add("spin-y-animation");
			setTimeout(() => emojiChar.classList.remove("spin-y-animation"), 500);

			navigator.clipboard.writeText(emoji.emoji);

			showToast(emoji.emoji);
		});

		emojiContainer.appendChild(card);
	});
};

// Initial Display
window.addEventListener("load", () => {
	displayEmojis(emojiList);
});

// Search/Filter Logic
searchInput.addEventListener("keyup", (e) => {
	const value = e.target.value.toLowerCase();

	const filteredList = emojiList.filter((emoji) => {
		return (
			emoji.description.toLowerCase().includes(value) ||
			emoji.tags.some((tag) => tag.toLowerCase().includes(value)) ||
			emoji.aliases.some((alias) => alias.toLowerCase().includes(value))
		);
	});

	displayEmojis(filteredList);
});

const showToast = (emoji) => {
	const toast = document.getElementById("toast-container");
	const emojiSpan = document.getElementById("copied-emoji");

	emojiSpan.innerText = emoji;
    toast.classList.remove("hidden");
    
	setTimeout(() => {
		toast.classList.add("hidden");
	}, 2000);
};
