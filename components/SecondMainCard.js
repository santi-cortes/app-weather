import React from 'react';

const SecondMainCard = ({ activateFlip, setActivateFlip }) => {
	const flipCard = () => {
		setActivateFlip(!activateFlip);
	};
	return (
		<div className="absolute shadow-md top-0 h-[380px] bg-white text-slate-950 dark:text-white dark:bg-slate-950 w-full border-4 flex flex-col gap-3 p-3 z-0 flip-card-back">
			<div className="text-slate-950 dark:text-white text-center">
				Más sobre china:
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.898279414792!2d-98.19716707302345!3d19.053861485435288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc10248819339%3A0xaaaaa2b60e25f5a6!2sLos%20fuertes%20parque!5e0!3m2!1ses-419!2smx!4v1687417683073!5m2!1ses-419!2smx"
				allowFullScreen=""
				className="h-[28vh]"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Google Maps Embed"
			></iframe>
			<div className="text-center">
				<button
					onClick={flipCard}
					className="border-4 p-1 hover:border-slate-400 duration-300 transition-border"
				>
					Regresar
				</button>
			</div>
		</div>
	);
};

export default SecondMainCard;
