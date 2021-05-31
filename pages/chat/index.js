//import Messages from "../../components/chatcomponents/messages";
import firebase from "../../firebase/firebase.js";
import { useState, useEffect } from "react";
import Messages from "../../components/chatcomponents/messages.js";

const Chat = () => {
	const [state, setState] = useState({ nameDisplay: [] });

	const [myUser, setMyUser] = useState();

	const [anotherUser, setAnotherUser] = useState("");
	const [newMsg, setNewMsg] = useState("");

	const [open, setOpen] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				var username = user.email;
				console.log("The user is " + username);
				username = username.split("@");
				user = username[0];
				setMyUser(user);
				firebase
					.database()
					.ref("Messaging/" + user + "/Messages")
					.on("value", (data) => {
						var contact = data.val();
						if (contact != null) {
							setState({
								nameDisplay: Object.keys(contact),
							});
						}
					});
			} else {
				console.log("no user signed in");
			}
		});
	}, []);

	const newChat = () => {
		setOpen(!open);
	};

	const sendMsgs = (e) => {
		e.preventDefault();
		console.log(myUser, "Check", anotherUser);
		if (newMsg == "" || anotherUser == "") {
			window.alert("FIELDS CAN'T BE EMPTY");
		} else {
			firebase
				.database()
				.ref("Messaging/" + myUser + "/Messages/" + anotherUser)
				.push({
					Message: newMsg,
					Flag: "0",
					createdAt: firebase.database.ServerValue.TIMESTAMP,
				});
			firebase
				.database()
				.ref("Messaging/" + anotherUser + "/Messages/" + myUser)
				.push({
					Message: newMsg,
					Flag: "1",
					createdAt: firebase.database.ServerValue.TIMESTAMP,
				});
			console.log("newMsg is working", newMsg);
			setOpen(!open);
			setAnotherUser("");
			setNewMsg("");
		}
	};
	return (
		<div>
			<div
				className="bg-gray-100 shadow-2xl"
				style={{
					position: "absolute",
					top: "7.35%",
					width: "15%",
					height: "92.5%",
				}}
			>
				<div
					className="absolute bottom-10 left-5 mt-2 font-semibold newMsg-lg uppercase px-6 py-2 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500"
					onClick={newChat}
				>
					New Chat
				</div>
				{open ? (
					<div className="absolute bottom-10 left-5 bg-gray-300 p-2 ">
						<div>
							<input
								className="focus:outline-none py-2 px-2 text-gray-600 text-lg border-b-2 border-gray-700 bg-transparent"
								style={{ width: "100%" }}
								onChange={(e) => setAnotherUser(e.target.value)}
								placeholder="username"
							/>
						</div>
						<div>
							<input
								className="focus:outline-none py-2 px-2 text-gray-600 text-lg border-b-2 border-gray-700 bg-transparent"
								onChange={(e) => setNewMsg(e.target.value)}
								placeholder="New Message"
							/>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<button
								onClick={sendMsgs}
								className="mt-2 font-semibold newMsg-lg uppercase px-6 py-2 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500"
							>
								Send
							</button>
							<button
								onClick={() => setOpen(false)}
								className="mt-2 font-semibold newMsg-lg uppercase px-6 py-2 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500"
							>
								Cancel
							</button>
						</div>
					</div>
				) : null}

				<div className="" style={{ margin: "auto" }}>
					{state.nameDisplay.map((i) => (
						<div key={i}>
							<Messages otherUser={i} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Chat;
