import React, { useState } from 'react';

export const CatsHeader = (category) => {
	const [imagenes, setImagenes] = useState([]);

	const getImagenes = async () => {
		const url = 'https://api.thecatapi.com/v1/images/search';
		const response = await fetch(url);
		const data = await response.json();

		const cats = data.map((img) => {
			return {
				id: img.id,
				url: img.url,
			};
		});
		console.log(cats);
		setImagenes(cats);

		const titleAnimate = document.querySelector('h1');
		titleAnimate.classList.add('animate__animated', 'animate__bounce');
	};

	const handleButtonClick = () => {
		getImagenes();

		const titleAnimate = document.querySelector('h1');
		titleAnimate.classList.remove('animate__animated', 'animate__bounce');
	};
	return (
		<>
			<header className="Header">
				<h1>CatsApp</h1>
			</header>

			<main className="Main">
				<section className="main__section">
					<button onClick={handleButtonClick}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
						Search
					</button>
					<figure className="section--figure">
						{imagenes.map((cat) => {
							return (
								<img
									src={cat.url}
									key={cat.id}
									alt="Imagen de gatos"
									className="animate__animated animate__fadeIn animate__delay-1s"
								/>
							);
						})}
					</figure>
				</section>
			</main>
		</>
	);
};
