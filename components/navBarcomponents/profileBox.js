import Link from "next/link";
import { useState } from "react";
import app from '../../firebase/firebase';

const Profilebox = ({ clicked }) => {
	const [loggedin, setLoggedin] = useState(true);

	const logOut = () => {
		app.auth().signOut()
	}
	return (
		<div
			style={{ position: "absolute", top: "100%", right: "1%", width: "300px" }}
		>
			<div className="bg-gray-200 p-6 mt-1 rounded shadow-2xl">
				<div className="justify-center text-center">
					<Link href="/dashboard">
						<div className="items-center hover:border-yellow-500 border-l-4 border-b-4 hover:bg-white border-transparent hover:border-l-4 hover:border-b-4 px-4 py-2 m-4 transition transform duration-200 hover:-translate-x-4">
							<button className="font-semibold text-2xl text-gray-700 tracking-widest uppercase focus:outline-none">
								Profile
							</button>
						</div>
					</Link>
					<Link href="/chat">
						<div className="items-center hover:border-yellow-500 border-l-4 border-b-4 hover:bg-white border-transparent hover:border-l-4 hover:border-b-4 px-4 py-2 m-4 transition transform duration-200 hover:-translate-x-4">
							<button className="font-semibold text-2xl text-gray-700 tracking-widest uppercase focus:outline-none">
								chat
							</button>
						</div>
					</Link>
					<Link href="/predictor">
						<div className="items-center hover:border-yellow-500 border-l-4 border-b-4 hover:bg-white border-transparent hover:border-l-4 hover:border-b-4 px-4 py-2 m-4 transition transform duration-200 hover:-translate-x-4">
							<button className="font-semibold text-2xl text-gray-700 tracking-widest uppercase focus:outline-none">
								predictor
							</button>
						</div>
					</Link>
					<div
						onClick={logOut}
						className="items-center bg-red-500 hover:bg-green-500 px-4 py-2 m-4 transition transform duration-200 hover:-translate-x-4"
					>
						<button className="font-semibold text-2xl text-gray-700 tracking-widest uppercase focus:outline-none">
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profilebox;