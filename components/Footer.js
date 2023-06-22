import React from 'react';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin
} from 'react-icons/ai';

const Footer = () => {
	return (
		<div className="h-fit bg-white text-slate-900 dark:text-white dark:bg-slate-900 flex flex-col p-5 gap-5">
			<h1 className="text-center">Contacto:</h1>
			<div className="text-center flex gap-2 justify-around items-center">
				<a
					href="https://www.facebook.com/sant.mw"
					target="_blank"
					className="bg-slate-950 text-white dark:bg-white dark:text-slate-900 text-3xl flex justify-center items-center"
				>
					<AiFillFacebook />
				</a>
				<a
					href="https://www.instagram.com/santyao476/"
					target="_blank"
					className="bg-slate-950 text-white dark:bg-white dark:text-slate-900 text-3xl flex justify-center items-center"
				>
					<AiFillInstagram />
				</a>
				<a
					href="https://www.linkedin.com/in/santiago-cortes-7043a8251/"
					target="_blank"
					className="bg-slate-950 text-white dark:bg-white dark:text-slate-900 text-3xl flex justify-center items-center"
				>
					<AiFillLinkedin />
				</a>
			</div>
			<h1 className="text-center">
				Hecho por: <br /> Santiago Cortes
			</h1>
		</div>
	);
};

export default Footer;
