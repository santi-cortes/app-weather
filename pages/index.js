import Clouds from '@/components/Clouds';
import Footer from '@/components/Footer';
import MainCard from '@/components/MainCard';
import OtherWheathers from '@/components/OtherWheathers';
import SearchZone from '@/components/SearchZone';
import { useEffect, useState } from 'react';

export default function Home() {
	const [theme, setTheme] = useState('dark');
	const [isChecked, setIsChecked] = useState(false);
	const [modal, setModal] = useState(false);
	useEffect(() => {
		if (
			window.matchMedia('(prefers-color-scheme: dark)').matches &&
			window !== undefined
				? localStorage.getItem('theme') === 'dark'
				: false
		) {
			document.documentElement.classList.add('dark');
		} else {
			setIsChecked(true);
			document.documentElement.classList.add('light');
		}
		window !== undefined
			? setModal(sessionStorage.getItem('modalClose'))
			: false;
	}, []);

	const activate = (th) => {
		let pageTheme = th.target.value;
		let pageNotTheme;
		!isChecked ? (pageNotTheme = 'light') : (pageNotTheme = 'dark');
		document.documentElement.classList.remove(pageTheme);
		document.documentElement.classList.add(pageNotTheme);
		!isChecked ? setTheme('light') : setTheme('dark');
		window !== undefined
			? localStorage.setItem('theme', pageNotTheme)
			: undefined;
		isChecked === false ? setIsChecked(true) : setIsChecked(false);
	};

	const closeModal = () => {
		setModal(true);
		window !== undefined ? sessionStorage.setItem('modalClose', true) : false;
	};
	return (
		<>
			<div className="bg-white overflow-y-scroll text-slate-950 dark:bg-slate-950 h-screen w-screen dark:text-white flex flex-col">
				<section className="h-fit p-1">
					<h1 className="text-center">
						Una app de clima diferente, más simple, mas amena.
					</h1>
					<div className="h-[45vh] border-4 m-4 p-4 relative flex overflow-hidden thunders">
						<Clouds />
					</div>
					<div>
						<iframe
							title="Lista de reproducción de Spotify"
							src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYgToHlKhwA5?utm_source=generator"
							width="92%"
							height="120"
							frameBorder="0"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
							className="m-4"
						></iframe>
						<h1 className="text-center -mt-[45px]">
							Escucha la lluvia y relajate
						</h1>
					</div>
					<SearchZone />
					<MainCard />
					<OtherWheathers />
					<OtherWheathers />
				</section>
				<Footer />

				{!modal && (
					<div
						className={`absolute w-full h-full backdrop-blur-sm ${
							modal ? 'backdrop-blur-0 scale-0' : ''
						} transition-backdrop duration-500 top-0 text-black dark:text-white flex`}
					>
						<div
							className={`m-auto mt-32 w-[90%] bg-white dark:bg-slate-900 px-6 py-10 flex flex-col gap-5 relative transition-transform duration-500 ${
								modal ? 'scale-0' : ''
							}`}
						>
							<button
								className="absolute right-5 top-2 text-lg"
								onClick={closeModal}
							>
								x
							</button>
							<h1 className="text-center">Hola, bienvenido a mi app!</h1>
							<p className="tracking-wider text-left">
								Espero te encuentres bien, te presente a mi app de clima. En
								ella puedes disponer del clima en funcion de tu localizacion,
								asi que asegurate de permitir la ubicacion, tambien puedes
								descargar la app móvil.
								<br /> Si te interesan más de mis proyectos, puedes ir a mi
								linkedin, ahi encontraras mi github
							</p>

							<h1>Tema:</h1>
							<div className="flex flex-col gap-1">
								<input
									type="checkbox"
									hidden="hidden"
									id="username"
									value={theme}
									checked={isChecked}
									onChange={activate}
								/>
								<label className="switch" htmlFor="username" />
								<div className="w-[50px] flex text-[8px]">
									<h1>Dark/</h1>
									<h1>Light</h1>
								</div>
							</div>

							<h3 className="text-xs">
								Puedes configurar más tarde el tema en el menu
							</h3>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
