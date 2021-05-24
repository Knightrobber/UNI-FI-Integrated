import React, { useState } from "react";

const AcadProfile = () => {
	const [state, setState] = useState({
		gre: "N.A",
		gmat: "N.A",
		gpa: 7.0 + "/" + 10,
		Wexp: 2 + " Months",
		Blogs: 0,
		Rpaper: 2,
	});
	return (
		<div className="p-10">
			<div className="p-10">
				<div className="pt-20 pl-20">
					<p className="text-center font-semibold text-6xl tracking-wider">
						Academic Profile
					</p>
				</div>
				<div
					className="grid grid-cols-2 gap-4 p-20"
					style={{ marginLeft: "20%", width: "auto" }}
				>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							GRE Score
						</label>
						<input
							value={state.gre}
							onChange={(e) => setState({ gre: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							GMAT Score
						</label>
						<input
							value={state.gmat}
							onChange={(e) => setState({ gmat: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Current GPA
						</label>
						<input
							value={state.gpa}
							onChange={(e) => setState({ gpa: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Work Experience
						</label>
						<input
							value={state.Wexp}
							onChange={(e) => setState({ Wexp: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Backlogs
						</label>
						<input
							value={state.Blogs}
							onChange={(e) => setState({ Blogs: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Research Paper
						</label>
						<input
							value={state.Rpaper}
							onChange={(e) => setState({ Rpaper: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
				</div>
				<div
					style={{ position: "absolute", left: "47%" }}
					className="inline-block ml-4 px-3 py-3 m-2 shadow-2xl bg-yellow-600 hover:bg-green-500 transition transform duration-50 hover:scale-110 rounded-2xl"
				>
					<button className="text-right font-semibold text-2xl text-white uppercase tracking-wider focus:outline-none">
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
};

export default AcadProfile;
