import Footer from '@/components/Footer';
import React, { useEffect } from 'react';

const Doc = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-y-scroll bg-white dark:bg-slate-950 dark:text-white text-slate-950 flex flex-col gap-2">
				<header className="m-4 flex flex-col gap-4">
					<h1 className="text-center">HOLA, BIENVENIDO A LA DOCUMENTACION!</h1>
					<p>
						Aquí encontrarás información de la api que se uso para desarrollar
						esta aplicación
					</p>
				</header>
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
				<section className="m-4 flex flex-col gap-4">
					<h1 className="text-2xl">Inicio</h1>
					<p>
						La API meteorológica de OpenWeatherMap proporciona acceso a diversos
						datos:
					</p>
					<ul className="m-4">
						<li>Clima actual</li>
						<li> Pronóstico de minutos para 1 hora</li>
						<li> Pronóstico por hora para 48 horas</li>
						<li>Pronóstico diario parar 8 días</li>
						<li>Alertas metereológicas gubernamentales</li>
						<li>
							Datos metereológicos históricos para cualquier marca de tiempo
							durante más de 40 años archivo histórico
						</li>
						<li>
							Historial de datos metereologicos agregados diarios durante más de
							40 años archivo histórico
						</li>
					</ul>
				</section>
				<section className="m-4 flex flex-col gap-4">
					<h1 className="text-2xl">Endpoints usados</h1>
				</section>
				<section className="m-4 flex flex-col gap-4">
					<h1 className="text-2xl">Mejoras</h1>
				</section>
				<section className="m-4 flex flex-col gap-4">
					<h1 className="text-2xl">Sugerencias</h1>
				</section>
				<Footer height={'300'} />
			</div>
		</>
	);
};

export default Doc;
