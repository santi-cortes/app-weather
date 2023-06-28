import Footer from '@/components/Footer';
import React from 'react';

const Doc = () => {
	return (
		<>
			<div className="h-screen bg-white dark:bg-slate-950 dark:text-white text-slate-950 flex flex-col gap-2">
				<div className="m-4 flex flex-col gap-4">
					<h1 className="text-center">HOLA, BIENVENIDO A LA DOCUMENTACION!</h1>
					<p>
						Aquí encontrarás información de la api que se uso para desarrollar
						esta aplicación
					</p>
				</div>
				<nav className="m-4 p-10 border-4">
					<ul className="flex flex-col gap-2">
						<li className="hover:underline cursor-pointer">Inicio</li>
						<li className="hover:underline cursor-pointer">
							Weather API de OpenWeatherMap
						</li>
						<li className="hover:underline cursor-pointer">Endpoints usados</li>
						<li className="hover:underline cursor-pointer">Mejoras</li>
					</ul>
				</nav>
			</div>
			<Footer />
		</>
	);
};

export default Doc;
