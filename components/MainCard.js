import React from 'react';

const MainCard = ({ activateFlip, setActivateFlip }) => {
	const flipCard = () => {
		setActivateFlip(!activateFlip);
	};
	return (
		<div className="absolute top-0 shadow-md text-slate-950 bg-white p-3 h-[380px] dark:text-white dark:bg-slate-950 border-4 flex flex-col gap-3 flip-card-front z-20">
			<h1 className="font-semibold">El clima desde China es este:</h1>
			<div className="flex flex-wrap gap-2 justify-around text-xl">
				<div>
					<h2>Viento:</h2>
					<h2>12 Km/Hr</h2>
				</div>
				<div>
					<h2>Humedad:</h2>
					<h2>30%</h2>
				</div>
				<div>
					<h2>Presión:</h2>
					<h2>1.2 atm</h2>
				</div>
				<div>
					<h2>LLuvia:</h2>
					<h2>50%</h2>
				</div>
			</div>
			<div className="flex flex-col text-center gap-2 text-xl">
				<h1>Temperatura:</h1>
				<h1 className="text-4xl">23º</h1>
				<h1>Soleado ☀️</h1>
			</div>
			<div className="text-center">
				<button
					onClick={flipCard}
					className="border-4 p-1 hover:border-slate-400 duration-300 transition-border"
				>
					Ver mapa
				</button>
			</div>
		</div>
	);
};

export default MainCard;
