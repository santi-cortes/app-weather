import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const SearchZone = () => {
	return (
		<div className="flex justify-center items-center border-4 m-4">
			<input
				type="text"
				className="bg-transparent text-white border-none w-[95%] text-2xl p-1"
			/>
			<button className="w-[10%] flex justify-center h-full transition-text duration-200 active:text-blue-600">
				<SearchOutlined className="text-2xl" />
			</button>
		</div>
	);
};

export default SearchZone;
