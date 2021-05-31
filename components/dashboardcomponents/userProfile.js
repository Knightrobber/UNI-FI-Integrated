import React, { useEffect, useState } from "react";
import app from "../../firebase/firebase";

const UserProfile = () => {
	const [state, setState] = useState({
		name: "Sajal",
		fullname: "",
		email: "sajal@example.com",
		phnumber: "9900990099",
		location: "India",
		postalcode: "202202",
	});

	useEffect(() => {
		app.auth().onAuthStateChanged(function (user) {
			if (user) {
				var username = user.email.split("@");
				setState({
					fullname: username[0],
					email: user.email,
				});
			}
		});
	}, []);

	return (
		<div className="p-10">
			<div className="p-10">
				<div
					className="pt-10 pl-10"
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div style={{ marginLeft: "43%" }}>
						<img src="https://picsum.photos/250" className="rounded-full" />
					</div>
					<div className="pl-10">
						<p className="text-center font-semibold text-4xl tracking-wider">
							{state.fullname}
						</p>
						<p className="text-center font-light text-3xl tracking-wider">
							{state.location}
						</p>
					</div>
				</div>
				<div
					className="grid grid-cols-2 gap-4 p-20"
					style={{ marginLeft: "20%", width: "auto" }}
				>
					{/* <div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Name
						</label>
						<input
							value={state.name}
							onChange={(e) => setState({ name: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div> */}
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Name
						</label>
						<input
							value={state.fullname}
							onChange={(e) => setState({ fullname: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Email Address
						</label>
						<input
							value={state.email}
							onChange={(e) => setState({ email: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					{/* <div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Phone Number
						</label>
						<input
							value={state.phnumber}
							onChange={(e) => setState({ phnumber: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Location
						</label>
						<input
							value={state.location}
							onChange={(e) => setState({ location: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<label className="mb-1 text-gray-600 text-lg font-normal">
							Postal Code
						</label>
						<input
							value={state.postalcode}
							onChange={(e) => setState({ postalcode: e.target.value })}
							type="text"
							className="focus:ring-2 focus:ring-blue-200 py-2 align-middle px-2 text-lg bg-gray-100 rounded-md border-gray-500 focus:outline-none font-normal tracking-wider text-gray-700"
							style={{ width: "60%", borderWidth: "1px" }}
						/>
					</div> */}
				</div>
				{/* <div
					style={{ position: "absolute", left: "47%" }}
					className="inline-block ml-4 px-3 py-3 m-2 shadow-2xl bg-yellow-600 hover:bg-green-500 transition transform duration-50 hover:scale-110 rounded-2xl"
				>
					<button className="text-right font-semibold text-2xl text-white uppercase tracking-wider focus:outline-none">
						Save Changes
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default UserProfile;