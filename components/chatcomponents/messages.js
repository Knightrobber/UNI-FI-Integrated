import Link from "next/link";
import { useState, useEffect } from "react";
import firebase from "../../firebase/firebase.js";

const Messages = (props) => {
	const [state, setState] = useState({
		messages: [],
		flag: [],
	});

	const [myUser, setMyUser] = useState();

	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				var username = user.email;
				console.log("The user is " + username);
				username = username.split("@");
				user = username[0];
				setMyUser(user);
				console.log(user, "Messages", props.otherUser);
				firebase
					.database()
					.ref("Messaging/" + user + "/Messages/" + props.otherUser)
					.on("value", (data) => {
						var array = [];
						var flagArr = [];
						data.forEach((snap) => {
							array.push(snap.val().Message);
							flagArr.push(snap.val().Flag);
							setState({
								messages: array,
								flag: flagArr,
							});
						});
					});
			}
		});
	}, []);

	const clicked = () => {
		setOpen(!open);
	};

	const newchat = () => {};

	const sendMsgs = (e) => {
		e.preventDefault();
		console.log(myUser, "Check", props.otherUser);
		firebase
			.database()
			.ref("Messaging/" + myUser + "/Messages/" + props.otherUser)
			.push({
				Message: text,
				Flag: "0",
				createdAt: firebase.database.ServerValue.TIMESTAMP,
			});
		firebase
			.database()
			.ref("Messaging/" + props.otherUser + "/Messages/" + myUser)
			.push({
				Message: text,
				Flag: "1",
				createdAt: firebase.database.ServerValue.TIMESTAMP,
			});
		console.log("text is working", text);
		setText("");
	};

	return (
		<div>
			<div
				onClick={clicked}
				style={{ width: "100%" }}
				className={`${
					open
						? "transition transform duration-200 bg-white border-yellow-500 border-r-4 shadow-2xl"
						: ""
				}hover:bg-white z-40 mt-4 duration-200 hover:border-r-4 transform transition border-yellow-500 focus:outline-none`}
			>
				<div className="flex p-2">
					<div className="w-1/4">
						<img src="https://picsum.photos/50" className="rounded-full" />
					</div>
					<div className="w-1/2">
						<p className="text-2xl text-medium mt-2 text-center text-gray-600">
							{props.otherUser}
						</p>
						{/* <p className="text-sm -mt-1 text-gray-500">prev message</p> */}
					</div>
				</div>
			</div>
			{open ? (
				<div
					className="bg-gray-100 border-2 border-white"
					style={{
						position: "absolute",
						left: "100%",
						top: "0",
						width: "85vw",
						height: "92vh",
					}}
				>
					<div
						className="bg-gray-200 shadow-xl flex items-center p-1"
						style={{ margin: "auto", width: "100%" }}
					>
						<img src="https://picsum.photos/50" className="ml-5 rounded-full" />
						<p className="text-2xl text-medium text-gray-800 p-1 pl-4">
							{props.otherUser}
						</p>
					</div>
					<div className="p-20 overflow-scroll" style={{ height: "90%" }}>
						{state.messages.map((item, index) => (
							<div key={index}>
								{console.log("div", index, item)}
								<div
									className={`${
										state.flag[index] == "1"
											? "text-left text-2xl mt-2"
											: "text-right font-bold text-2xl mt-2"
									}`}
								>
									{item}
								</div>
							</div>
						))}
					</div>
					<div
						className="flex border-t-2 border-gray-300 rounded p-1 bg-gray-200"
						style={{
							position: "absolute",
							width: "100%",
							margin: "auto",
							top: "94%",
						}}
					>
						<input
							style={{ outline: "none", width: "100%", margin: "auto" }}
							className="text-gray-700 tracking-wider text-lg px-2 py-3 rounded-tl-lg"
							id="search"
							type="text"
							value={text}
							placeholder="Type a message"
							onChange={(e) => setText(e.target.value)}
						/>
						<button
							onClick={sendMsgs}
							className="font-semibold text-lg uppercase px-4 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500"
						>
							Send
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Messages;
