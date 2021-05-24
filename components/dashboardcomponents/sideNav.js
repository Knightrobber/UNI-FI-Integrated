import { data } from "autoprefixer";
import React, { useState } from "react";

const Sidenav = ({ data }) => {
	const [info, setInfo] = useState(true);

	data(info);
	return (
		<div
			className="bg-gray-100 shadow-2xl"
			style={{
				position: "absolute",
				top: "7.5%",
				width: "15%",
				height: "92.5%",
			}}
		>
			<div className="pl-6 pt-40" style={{ margin: "auto" }}>
				<div
					style={{ margin: "auto" }}
					className="uppercase text-5xl text-gray-700 font-semibold tracking"
				>
					User Info
				</div>
				<div
					style={{ display: "flex", flexDirection: "column" }}
					className="pt-40"
				>
					<button
						onClick={() => setInfo(true)}
						className={`${
							info
								? "transition transform duration-200 font-bold border-yellow-500 border-r-4 border-b-4 shadow-2xl translate-x-4 bg-white text-3xl"
								: "font-thin text-2xl"
						} p-2 pr-16 hover:bg-white duration-200 hover:border-r-4 hover:border-b-4 transform transition border-yellow-500 focus:outline-none`}
					>
						Personal
					</button>
					<button
						onClick={() => setInfo(false)}
						className={`${
							info
								? "font-thin text-2xl"
								: "transition transform duration-200 font-bold border-yellow-500 border-r-4 border-b-4 shadow-2xl translate-x-4 bg-white text-3xl"
						} p-2 mt-5 pr-16 hover:bg-white duration-200 hover:border-r-4 hover:border-b-4 transform transition border-yellow-500 focus:outline-none`}
					>
						Academic
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
