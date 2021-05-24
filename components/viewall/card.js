const Card = () => {
	return (
		<div
			style={{
				boxShadow:
					"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			}}
			className="mt-10 p-4 rounded-sm border-r-4 border-yellow-500 hover:border-green-600 transition duration-200"
		>
			<div className="">
				<div className="pl-20 text-gray-600 font-semibold text-2xl tracking-wide">
					Shiv Nadar University
				</div>
				<div className="pl-20 pb-5 text-black font-semibold text-4xl tracking-wide">
					Shiv Nadar University
				</div>

				<div className="grid grid-cols-3 pr-10 pl-10">
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg Salary
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg Tuition fee
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Acceptance Rate
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg GRE Score
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg GMAT Score
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg GPA
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							123
						</div>
					</div>
					<div className="mt-5" style={{ position: "relative"}}>
						<div className="rounded-sm inline-block ml-4 px-3 py-1 m-2 bg-yellow-500 hover:bg-green-600 bg-gradient-to-r hover:translate-x-3 transform transition duration-200">
							<button className="uppercase text-right font-semibold text-2xl text-white tracking-wider focus:outline-none">
								View
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
