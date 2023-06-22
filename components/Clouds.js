import React from 'react';

const Clouds = () => {
	return (
		<>
			<div className="absolute z-10 cloud left-[60px] top-[30px]">
				<div className="w-16 h-4 bg-white border-2 border-white rounded-[10px]"></div>
				<div className="w-[100px] h-4 bg-white border-2 border-white rounded-[10px] -mt-2 -ml-[14px]"></div>
				<div className="w-[120px] h-4 bg-white border-2 border-white rounded-[10px] -mt-2 -ml-[25px]"></div>
				<div className="w-[100px] h-4 bg-white border-2 border-white -ml-4 -mt-2 rounded-[10px]"></div>
			</div>
			<div className="absolute z-10 cloud1 right-[132px] top-[64px]">
				<div className="w-[55px] h-4 bg-white border-2 border-white rounded-[10px] ml-3"></div>
				<div className="w-[88px] h-4 bg-white border-2 border-white -mt-2 rounded-[10px]"></div>
			</div>

			<div className="absolute z-10 cloud2 right-[36px] top-[20px]">
				<div className="w-[30px] h-4 bg-white border-2 border-white rounded-[10px] ml-5"></div>
				<div className="w-[65px] h-4 bg-white border-2 border-white rounded-[10px] ml-[6px] -mt-2"></div>
				<div className="w-[100px] h-4 bg-white border-2 border-white rounded-[10px] -ml-1 -mt-2"></div>
				<div className="w-[110px] h-4 bg-white border-2 border-white rounded-[10px] -mt-2"></div>
				<div className="w-16 h-4 bg-white border-2 border-white rounded-[10px] -mt-2 ml-9"></div>
			</div>
			<div className="absolute z-10 cloud3 right-[180px] top-[40px]">
				<div className="w-[55px] h-4 bg-white border-2 border-white rounded-[10px] ml-3"></div>
				<div className="w-[88px] h-4 bg-white border-2 border-white -mt-2 rounded-[10px]"></div>
			</div>
			<div className="w-full h-[250px-z-0 relative">
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water right-[10px]"></div>
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water1 right-[50px]"></div>
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water2 right-[80px]"></div>
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water3 right-[110px]"></div>
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water4 right-[140px]"></div>
				<div className="h-[2px] w-4 bg-blue-700 -rotate-[80deg] absolute water5 right-[170px]"></div>
			</div>
			<div className="person absolute bottom-28">
				<div className="bg-white w-6 h-6 rounded-full"></div>
				<div className="relative">
					<div className="bg-white z-0 w-6 h-12 absolute rounded-3xl"></div>
					<div className="z-10 arms">
						<div className="bg-white w-[10px] h-[25px] absolute ml-[7px] rounded-2xl z-10 mt-[7px]"></div>
						<div className="bg-white w-[10px] h-[25px] absolute ml-[13px] top-[19px] rounded-2xl rotate-[120deg] z-0"></div>
					</div>
					<div className="z-0 relative arms1">
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
