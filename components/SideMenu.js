import { AppContext } from '@/context/AppWrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

const SideMenu = () => {
	const { sideBar, setSideBar } = useContext(AppContext);

	const openSideBar = () => {
		setSideBar(false);
	};

	const routerPage = () => {
		setSideBar(false);
	};
	return (
		<div
			className={`absolute ${
				sideBar
					? 'backdrop-blur-sm translate-x-0'
					: 'translate-x-[-100%] backdrop-blur-0'
			} h-[100%] transition-all duration-300 w-full z-100 top-0 right-0 flex flex-row-reverse`}
		>
			<div
				className={`bg-white text-slate-900 dark:bg-slate-900 dark:text-white w-[60%] p-5 text-center transition-translate duration-300`}
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
			</div>
			<div onClick={() => openSideBar()} className="w-full"></div>
		</div>
	);
};

export default SideMenu;