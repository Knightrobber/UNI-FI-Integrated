const UniversityPage = () => {
	return (
		<div className="h-screen bg-gray-100">
			<div className="p-20 flex">
				<div className="w-1/2 p-10">
					<p
						style={{ fontSize: "60px" }}
						className="font-semibold pt-20 text-gray-700"
					>
						University of Wisconsin - Madison
					</p>
					<p
						style={{ fontSize: "24px" }}
						className="w-3/5 pt-10 font-semibold text-gray-700"
					>
						500 Lincoln Drive Madison, Wisconsin 53706 United States
					</p>
				</div>
				<div className="w-1/2 p-10">
					<div className="flex pt-48">
						<p
							style={{ fontSize: "24px" }}
							className="uppercase font-semibold pl-10 text-gray-700"
						>
							Other info
						</p>
						<p
							style={{ fontSize: "24px" }}
							className="uppercase font-semibold pl-10 text-gray-700"
						>
							Other info
						</p>
						<p
							style={{ fontSize: "24px" }}
							className="uppercase font-semibold pl-10 text-gray-700"
						>
							Other info
						</p>
						<p
							style={{ fontSize: "24px" }}
							className="uppercase font-semibold pl-10 text-gray-700"
						>
							Other info
						</p>
					</div>
				</div>
			</div>
			<hr
				style={{ width: "90%", margin: "auto" }}
				className="border-1 border-gray-300 border-black"
			/>
		</div>
	);
};

export default UniversityPage;
