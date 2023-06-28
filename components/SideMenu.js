import { AppContext } from '@/context/AppWrapper';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const SideMenu = () => {
	const { sideBar, setSideBar, setTheme, theme } = useContext(AppContext);
	const [isChecked, setIsChecked] = useState(false);

	const openSideBar = () => {
		setSideBar(false);
	};

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

	const routerPage = () => {
		setSideBar(false);
	};
	return (
		<div
			className={`absolute z-50 ${
				sideBar ? 'translate-x-0' : 'translate-x-[-100%]'
			} h-[100%] backdrop-blur-sm transition-all duration-300 w-full z-100 top-0 right-0 flex flex-row-reverse`}
		>
			<div
				className={`bg-white relative text-slate-900 dark:bg-slate-900 dark:text-white w-[60%] p-5 text-center transition-translate duration-300`}
			>
				<h1 className="mb-10">Menu</h1>
				<div className="gap-5 flex flex-col">
					<Link
						href="/"
						onClick={() => routerPage()}
						className="hover:underline cursor-pointer"
					>
						Inicio
					</Link>
					<Link
						href="/Doc"
						onClick={() => routerPage()}
						className="hover:underline cursor-pointer"
					>
						Documentación
					</Link>
					<Link
						href="/Contact"
						onClick={() => routerPage()}
						className="hover:underline cursor-pointer"
					>
						Contacto
					</Link>
				</div>
				<div className="absolute bottom-0 left-0 w-full mb-10">
					<h1>Tema:</h1>
					<div className="flex flex-col gap-1 items-center">
						<input
							type="checkbox"
							hidden="hidden"
							id="username1"
							value={theme}
							checked={isChecked}
							onChange={activate}
						/>
						<label className="switch" htmlFor="username1" />
						<div className="w-[50px] flex text-[8px]">
							<h1>Dark/</h1>
							<h1>Light</h1>
						</div>
					</div>
				</div>
			</div>
			<div onClick={() => openSideBar()} className="w-full"></div>
		</div>
	);
};

export default SideMenu;
