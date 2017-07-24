const createAndAppendCard = (header, body) => {
	const cardFragment = document.createDocumentFragment();
	const cardElement = document.createElement('div');
	const cardHeader = `<h2 class="card-header">${header}</h2>`;
	const cardBody = `<h2 class="card-body">${body}</h2>`;

	cardElement.innerHTML = `
		<div class="card">
			${cardHeader}
			${cardBody}
		</div>
	`;

	cardFragment.appendChild(cardElement);

	document.body.appendChild(cardFragment);
};

export default createAndAppendCard;
