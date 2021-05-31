import Searchbar from "../components/searchbar";
import Image from "next/image";

import firebase from '../firebase/firebase.js'
import Predictor from '../pages/predictor/index.js'
var collegeName = "CME"
firebase.database().ref("/Universities/"+ collegeName).once('value',(snap)=>{
	
})

/* Firebase.database().ref("/").once('value',(snap)=>{
	console.log(snap.val())
}) */
/* var arr = [[[-0.00163545, -0.02345434],
	[-0.01379535, -0.0253587 ],
	[-0.0019531 ,  0.0054289 ]], 
	[[-0.00502838, -0.00481874, -0.01717717]]] */

var arr = [[[-2.1228516 , -3.33223873, -2.53564722, -4.86232542],
	[ 8.46290573,  4.29320738, -3.4335058 ,  0.45384135],
	[ 6.73289843,  0.97950626,  0.86450509,  2.34178433]], [[-7.18521284,  7.23114988,  7.1414005 ]]]

var bias = [[[ 8.18326199],
	[-7.27273934],
	[-8.17520012]], [[-6.50382477]]]



var avg = [287.0, 8.0, 3.0, 101.0]

/* 	firebase.database().ref("/Universities/NYU/Predictor").set({
		W:arr,
		b:bias
	}).then(()=>{
		console.log("Db updated ")
	})
firebase.database().ref("/Universities/NYU/Avg").set({
	GRE:avg[0],
	GPA:avg[1],
	Papers:avg[2],
	TOEFL:avg[3]
}) */

var d1 = new Date()
var n = d1.getTime()

firebase.database().ref("/Universitites/CMU/").once('value',(snap)=>{
	var d2 =  new Date()
	var n2 = d2.getTime()

	console.log(n2-n,"Time taken")
})


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
