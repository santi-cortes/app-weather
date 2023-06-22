import Image from 'next/image';
import React from 'react';

const MainCard = () => {
	return (
		<div className="text-slate-950 dark:text-white p-4 border-4 m-4 flex flex-col gap-3">
			<h1 className="font-semibold">El clima desde China es este:</h1>
			<div className="flex flex-wrap gap-4 justify-around">
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
			<div className="flex flex-col text-center gap-2">
				<h1>Temperatura:</h1>
				<h1 className="text-4xl">23º</h1>
				<h1>Soleado ☀️</h1>
			</div>
			<div className="h-[180px]"></div>
		</div>
	);
};

export default MainCard;
