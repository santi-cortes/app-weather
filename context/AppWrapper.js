import React, { createContext, useEffect, useState } from 'react';
const AppContext = createContext();

const AppWrapper = ({ children }) => {
	const [sideBar, setSideBar] = useState(false);
	const [theme, setTheme] = useState('dark');
	const [modal, setModal] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

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
			? setModal(sessionStorage.getItem('modalClose')) &&
			  setTheme(localStorage.getItem('theme'))
			: false;
	}, []);

	return (
		<AppContext.Provider
			value={{
				sideBar,
				setSideBar,
				theme,
				setTheme,
				modal,
				setModal,
				isChecked,
				setIsChecked
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppWrapper };
