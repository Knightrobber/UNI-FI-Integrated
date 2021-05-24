import app from "../../firebase/firebase";
import { useState } from "react";
import Router from "next/router";

const Register = () => {
	const [email, setEmail] = useState("");
	const [pswd, setPswd] = useState("");
	const [confirm, setConfirm] = useState("");

	const signUp = async () => {
		if (pswd == confirm) {
			await app.auth().createUserWithEmailAndPassword(email, pswd);
			console.log("Signed up user");
			Router.push("/");
		}
	};
	return (
		<div
			style={{ position: "absolute", top: "100%", right: "1%", width: "400px" }}
		>
			<div className="bg-gray-100 p-2 mt-1 rounded">
				<h1 className="text-3xl font-semibold text-center text-gray-600 uppercase">
					Register
				</h1>
				<form
					className="mt-6"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<div className="p-2">
						<label className="text-gray-500 ml-1 text-2xl">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							style={{ outline: "none", width: "100%" }}
							className="tracking-wider text-gray-600 text-lg px-2 outline-none bg-transparent border-b-2 border-gray-500"
							type="email"
							placeholder="username@example.com"
						/>
					</div>
					<div className="p-2">
						<label className="text-gray-500 ml-1 text-2xl">Password</label>
						<input
							onChange={(e) => setPswd(e.target.value)}
							style={{ outline: "none", width: "100%" }}
							className="tracking-wider text-gray-600 text-lg px-2 outline-none bg-transparent border-b-2 border-gray-500"
							type="password"
							placeholder="......................."
						/>
					</div>
					<div className="p-2">
						<label className="text-gray-500 ml-1 text-2xl">
							Confirm Password
						</label>
						<input
							onChange={(e) => setConfirm(e.target.value)}
							style={{ outline: "none", width: "100%" }}
							className="tracking-wider text-gray-600 text-lg px-2 outline-none bg-transparent border-b-2 border-gray-500"
							type="password"
							placeholder="......................."
						/>
					</div>
				</form>
				<div
					onClick={signUp}
					style={{ position: "relative", left: "28%" }}
					className="text-center inline-block ml-4 px-3 py-1 mt-10 shadow-2xl bg-yellow-500 hover:bg-green-500"
				>
					<button className="text-center font-semibold text-2xl text-white tracking-wider focus:outline-none">
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;