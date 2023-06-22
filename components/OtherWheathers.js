import Image from 'next/image';
import React from 'react';

const OtherWheathers = () => {
	return (
		<div className="m-4 border-4 p-4 flex flex-row justify-between items-center">
			<div className="flex flex-col justify-center">
				<div className="w-12 h-12 border-2 border-slate-950 dark:border-white">
					{/* <Image alt="" src={''} fill className="relative" /> */}
				</div>
				<h1 className="text-xs">Japon</h1>
			</div>
			<h1 className="text-4xl px-3">30º</h1>
			<div className="text-xs flex flex-col gap-2 justify-between">
				<div>
					<h1>Viento:</h1>
					<h1>12 Km/Hr</h1>
				</div>
				<div>
					<h1>Humedad:</h1>
					<h1>30%</h1>
				</div>
			</div>
			<button>Más</button>
		</div>
	);
};

export default OtherWheathers;
