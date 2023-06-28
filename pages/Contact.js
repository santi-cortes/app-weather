import Footer from '@/components/Footer';
import React from 'react';

const Contact = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-y-scroll bg-white text-slate-950 dark:text-white dark:bg-slate-950">
				<section className="flex flex-col gap-4 m-4">
					<h1 className="text-2xl text-center">¡Contáctame!</h1>
					<p className="text-center">
						Buscas concluir alguna aplicación web, aplicación móvil o alguna
						sugerencia respecto a app weather
					</p>
				</section>
				<section className="m-4 flex flex-col gap-4">
					<div className="flex flex-col">
						<h1>Nombre:</h1>
						<div className="border-4">
							<input
								type="text"
								className="bg-transparent border-4 shadow-lg text-slate-950 dark:text-white border-none w-full text-2xl p-1"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<h1>Correo de contacto:</h1>
						<div className="border-4">
							<input
								type="text"
								className="bg-transparent border-4 shadow-lg text-slate-950 dark:text-white border-none w-full text-2xl p-1"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<h1>Mensaje:</h1>
						<div className="border-4 w-full h-[208px] relative">
							<textarea
								type="text"
								className="input-lg bg-transparent h-[200px] border-4 shadow-lg text-slate-950 dark:text-white border-none w-full text-2xl"
							/>
						</div>
					</div>
					<div className="flex justify-center m-6">
						<button className="border-4 p-3 shadow-xl hover:border-slate-300 transition-border duration-300">
							Enviar
						</button>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
