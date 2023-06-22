import React from 'react';

const Clouds = () => {
	return (
		<>
			<div className="absolute z-10 cloud left-[60px] top-[30px]">
				<div className="w-16 h-4 bg-white shadow-xl border-2 border-white rounded-[10px]"></div>
				<div className="w-[100px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] -mt-2 -ml-[14px]"></div>
				<div className="w-[120px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] -mt-2 -ml-[25px]"></div>
				<div className="w-[100px] h-4 bg-white shadow-xl border-2 border-white -ml-4 -mt-2 rounded-[10px]"></div>
			</div>
			<div className="absolute z-10 cloud1 right-[132px] top-[64px]">
				<div className="w-[55px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] ml-3"></div>
				<div className="w-[88px] h-4 bg-white shadow-xl border-2 border-white -mt-2 rounded-[10px]"></div>
			</div>

			<div className="absolute z-10 cloud2 right-[36px] top-[20px]">
				<div className="w-[30px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] ml-5"></div>
				<div className="w-[65px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] ml-[6px] -mt-2"></div>
				<div className="w-[100px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] -ml-1 -mt-2"></div>
				<div className="w-[110px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] -mt-2"></div>
				<div className="w-16 h-4 bg-white shadow-xl border-2 border-white rounded-[10px] -mt-2 ml-9"></div>
			</div>
			<div className="absolute z-10 cloud3 right-[180px] top-[40px]">
				<div className="w-[55px] h-4 bg-white shadow-xl border-2 border-white rounded-[10px] ml-3"></div>
				<div className="w-[88px] h-4 bg-white shadow-xl border-2 border-white -mt-2 rounded-[10px]"></div>
			</div>
			{true && (
				<div className="w-full relative border-b-2 border-b-white">
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water right-[10px]"></div>
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water1 right-[50px]"></div>
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water2 right-[80px]"></div>
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water3 right-[110px]"></div>
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water4 right-[140px]"></div>
					<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water5 right-[170px]"></div>
				</div>
			)}
			{false && (
				<div className="absolute right-[10%] w-[50px] h-[50px] flex justify-center items-center sun">
					<div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
					<div className="absolute w-[50px] h-[50px] flex justify-center items-center">
						<div className="w-1 h-4 bg-yellow-400 ml-[60px] rotate-90 absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mr-[60px] rotate-90 absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mt-[60px] absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mb-[60px] absolute"></div>
					</div>
					<div className="absolute w-[50px] h-[50px] flex justify-center items-center rotate-45">
						<div className="w-1 h-4 bg-yellow-400 ml-[60px] rotate-90 absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mr-[60px] rotate-90 absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mt-[60px] absolute"></div>
						<div className="w-1 h-4 bg-yellow-400 mb-[60px] absolute"></div>
					</div>
				</div>
			)}
			{true && (
				<>
					<div className="absolute bg-slate-200 h-12 w-12 rounded-full right-10 shadow-slate-100 moon"></div>
					<div className="bg-white w-1 h-1 stars right-8 absolute"></div>
					<div className="bg-white w-1 h-1 stars1 left-12 top-32 absolute"></div>
					<div className="bg-white w-1 h-1 stars right-48 top-20 absolute"></div>
					<div className="bg-white w-1 h-1 stars1 right-14 top-24 absolute"></div>
					<div className="bg-white w-1 h-1 stars left-24  absolute"></div>
				</>
			)}
			<div className="person absolute bottom-[106px]">
				<div className="umbrella">
					<div className="absolute top-umbrella -mt-12 -ml-1"></div>
					<div className="absolute w-1 h-[70px] rounded-b-xl ml-10 -mt-3 bg-white"></div>
				</div>
				<div className="bg-white w-6 h-6 rounded-full"></div>
				<div className="relative">
					<div className="bg-white z-0 w-6 h-12 absolute rounded-3xl"></div>
					<div className="z-10 arms">
						<div className="bg-white w-[10px] h-[25px] absolute ml-[7px] rounded-2xl z-10 mt-[7px]"></div>
						<div className="bg-white w-[10px] h-[25px] absolute ml-[13px] top-[19px] rounded-2xl rotate-[120deg] z-0"></div>
					</div>
					<div className="z-0 relative rotate-[320deg]">
						<div className="bg-white w-[10px] h-[25px] absolute ml-[7px] top-1 rounded-2xl"></div>
						<div className="bg-white w-[10px] h-[25px] absolute ml-[15px] top-[17px] rounded-2xl rotate-[120deg] z-0"></div>
					</div>
				</div>
				<div className="relative top-10 left-2">
					<div className="absolute pierna">
						<div className="piernas w-3 h-8 bg-white rounded-2xl ml-[-1px] origin-top rotate-[-30deg]"></div>
						<div className="piernas w-3 h-8 bg-white rounded-2xl mt-[-14px] ml-[12px]"></div>
					</div>
					<div className="absolute pierna1">
						<div className="piernas w-3 h-8 bg-white rounded-2xl ml-[-1px] origin-top rotate-[-30deg]"></div>
						<div className="piernas w-3 h-8 bg-white rounded-2xl mt-[-14px] ml-[12px]"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Clouds;
