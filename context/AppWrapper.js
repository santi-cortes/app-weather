import React, { createContext, useState } from 'react';
const AppContext = createContext();

const AppWrapper = ({ children }) => {
	const [sideBar, setSideBar] = useState(false);
	let saludo = 'hola';
	return (
		<AppContext.Provider value={{ sideBar, setSideBar, saludo }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppWrapper };
