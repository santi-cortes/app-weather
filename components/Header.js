import { AppContext } from '@/context/AppWrapper';
import React, { useContext } from 'react';

const Header = () => {
	const { setSideBar } = useContext(AppContext);
	const openSideBar = () => {
		setSideBar(true);
	};

	return (
		<header className="bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-2 flex justify-between items-center h-[6%]">
			<h1 className="font-semibold text-2xl">App weather</h1>
			<button
				className="flex flex-col justify-between h-fit cursor-pointer"
				onClick={openSideBar}
			>
				<div className="h-[6px] flex justify-center items-center">---</div>
				<div className="h-[6px] flex justify-center items-center">---</div>
				<div className="h-[6px] flex justify-center items-center">---</div>
			</button>
		</header>
	);
};

export default Header;
