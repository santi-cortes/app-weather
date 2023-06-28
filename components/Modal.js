import { AppContext } from '@/context/AppWrapper';
import React, { useContext, useEffect } from 'react';

const Modal = () => {
	const { setTheme, theme, modal, setModal, isChecked, setIsChecked } =
		useContext(AppContext);

	useEffect(() => {
		const body = document.querySelector('body');
		window !== undefined && !modal ? (body.style.overflow = 'hidden') : false;
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
		const body = document.querySelector('body');
		window !== undefined ? (body.style.overflow = 'auto') : false;
	};
	return (
		<div
			className={`absolute w-screen h-screen backdrop-blur-sm ${
				modal ? 'backdrop-blur-0 scale-0' : ''
			} transition-backdrop duration-500 top-0 text-black dark:text-white flex justify-center items-center`}
		>
			<div
				className={`w-[90%] h-fit bg-white dark:bg-slate-900 px-6 py-10 flex flex-col gap-5 relative transition-transform duration-500 ${
					modal ? 'scale-0' : ''
				}`}
			>
				<button className="absolute right-5 top-2 text-lg" onClick={closeModal}>
					x
				</button>
				<h1 className="text-center">Hola, bienvenido a mi app!</h1>
				<p className="tracking-wider text-left">
					Espero te encuentres bien, te presente a mi app de clima. En ella
					puedes disponer del clima en funcion de tu localizacion, asi que
					asegurate de permitir la ubicacion, tambien puedes descargar la app
					móvil.
					<br /> Si te interesan más de mis proyectos, puedes ir a mi linkedin,
					ahi encontraras mi github
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
	);
};

export default Modal;
