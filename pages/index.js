import Searchbar from "../components/searchbar";
import Image from "next/image";

import firebase from '../firebase/firebase.js'
var collegeName = "CME"
firebase.database().ref("/Universities/"+ collegeName).once('value',(snap)=>{
	
})

/* Firebase.database().ref("/").once('value',(snap)=>{
	console.log(snap.val())
}) */
var arr = [[[-0.00163545, -0.02345434],
	[-0.01379535, -0.0253587 ],
	[-0.0019531 ,  0.0054289 ]], 
	[[-0.00502838, -0.00481874, -0.01717717]]]



console.log(arr.length)

export default function Home() {
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				backgroundImage: 'url("/background.jpg")',
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="grid grid-cols-1">
				<div>
					<div className="mt-40 ml-16">
						<h1
							style={{ fontSize: "150px" }}
							className="text-center -ml-20 pt-40 uppercase tracking-wide text-gray-100 font-bold"
						>
							Uni-Fi
						</h1>
						<p
							style={{ fontSize: "80px" }}
							className="tracking-widest font-bold text-gray-200 text-center uppercase"
						>
							UNifying university experience
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<Searchbar />
			</div>
		</div>
	);
}
