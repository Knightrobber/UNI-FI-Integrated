import Names from "../../components/chatcomponents/names";
import firebase from '../../firebase/firebase.js'
import { useState } from "react";
var user = ""
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {

		var username = user.email;
		console.log("The user is " + username)
		username = username.split('@')
		user = username[0];



	}
	else {
		console.log("no user signed in")
	}

})

var names = [1,2]

var db = firebase.database()

const Chat = () => {
	const [state, setState] = useState({ trigger: "",namesState:[] });
	function retrieveNames(){
		// populate the global names variable here

		// setting a dummy state to tell the browser to update the UI
		setState({
			namesState:messages
		})
		console.log("Hey")
	}

	function displayNames(){
		var UI=[]
		for(var i=0;i<names.length;++i){
			//UI.push(<p className={`${flag == 1 ? "text-right" : "text-left"}`}>message</p>)
			// if flag = 0
			UI.push(
				<Names  name="Adil"/>

			)
		}
		return(UI)
	}

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
				<div className="" style={{ margin: "auto" }}>
					{/* this is where the names of all users who the person has messaged must be */}
					{displayNames()}
					{/* <Names  name="Adil"/>
					<Names name="Kabira"/> */}
				</div>
			</div>
		</div>
	);
};

export default Chat;
