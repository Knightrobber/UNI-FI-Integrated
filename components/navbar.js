import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Login from "./forms/login";
import Register from "./forms/register";
import Profilebox from "./navBarcomponents/profileBox";
import app from "../firebase/firebase";

function navBar() {
	const [loggedin, setLoggedin] = useState(false);
	const [options, setOptions] = useState(false);
	const [state, setState] = useState({ login: false, register: false });

	loggedin ? ((state.login = false), (state.register = false)) : null;

	useEffect(() => {
		app.auth().onAuthStateChanged(function (user) {
			if (user) {
				setLoggedin(true);
			} else {
				setLoggedin(false);
			}
		});
	}, []);

	return (
		<nav className="nav absolute z-40 shadow-lg" style={{ width: "100vw" }}>
			<div className="flex">
				<Link href="/">
					<div className="w-1/2 ml-2 pt-2">
						<Image src="/logo_black.png" alt="Logo" width="115.2" height="60" />
					</div>
				</Link>
				{loggedin ? (
					<div className="text-right p-2" style={{ width: "50%" }}>
						<div
							onClick={() => setOptions(!options)}
							className="inline-block pt-5 pr-8 transform hover:scale-110 transition duration-200"
						>
							<svg
								width="25"
								height="20"
								viewBox="0 0 25 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0)">
									<path
										d="M0.625 5.15625H16.875C17.2202 5.15625 17.5 4.87645 17.5 4.53125V2.96875C17.5 2.62355 17.2202 2.34375 16.875 2.34375H0.625C0.279805 2.34375 0 2.62355 0 2.96875V4.53125C0 4.87645 0.279805 5.15625 0.625 5.15625ZM0.625 11.4062H16.875C17.2202 11.4062 17.5 11.1264 17.5 10.7812V9.21875C17.5 8.87355 17.2202 8.59375 16.875 8.59375H0.625C0.279805 8.59375 0 8.87355 0 9.21875V10.7812C0 11.1264 0.279805 11.4062 0.625 11.4062ZM0.625 17.6562H16.875C17.2202 17.6562 17.5 17.3764 17.5 17.0312V15.4688C17.5 15.1236 17.2202 14.8438 16.875 14.8438H0.625C0.279805 14.8438 0 15.1236 0 15.4688V17.0312C0 17.3764 0.279805 17.6562 0.625 17.6562Z"
										fill="black"
									/>
								</g>
							</svg>
						</div>
						{options ? (
							<Profilebox clicked={(logged) => setLoggedin(!logged)} />
						) : null}
					</div>
				) : (
					<div className="text-right p-2" style={{ width: "50%" }}>
						<div className="inline-block ml-4 px-1 py-1 m-2 ">
							<button
								onClick={() =>
									setState((prevState) => ({ login: !prevState.login }))
								}
								className="text-right font-semibold text-2xl text-white tracking-wider focus:outline-none"
							>
								Login
							</button>
						</div>

						<div className="inline-block ml-4 px-3 py-1 m-2 bg-yellow-500 hover:bg-green-500">
							<button
								onClick={() =>
									setState((prevState) => ({ register: !prevState.register }))
								}
								className="text-right font-semibold text-2xl text-white tracking-wider focus:outline-none"
							>
								Register
							</button>
						</div>
					</div>
				)}
				{state.login ? <Login /> : null}
				{state.register ? <Register /> : null}
			</div>
		</nav>
	);
}

export default navBar;