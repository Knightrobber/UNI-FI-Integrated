import { useState } from "react";
import firebase from '../../firebase/firebase.js'
function dot_product (v1,v2) {
	var product = 0
	for (var i=0;i<v1.length;++i){
		product += v1[i]*v2[i]
		//console.log("In dot func")
	}
	return product
}

function sigmoid(num){
	return (1/(1+Math.exp(-num)))
}
var GRE,CGPA,Papers,TOEFL
const Predictor = (props) => {
	const [state, setState] = useState({
		predictedValue: "Enter value in state",
		GRE:'',
		CGPA:'',
		Papers:'',
		TOEFL:''
	});
	console.log(window.location.href,"predictor")
	
	function predict(){
		/* var GRE,CGPA,Papers,TOEFL;
		GRE = parseFloat(state.GRE)
		CGPA = parseFloat(state.CGPA)
		Papers = parseFloat(state.Papers)
		TOEFL = parseFloat(state.TOEFL)

		console.log(state.GRE,state.CGPA,state.Papers,state.TOEFL)
		console.log(GRE,)

		if (isNaN(GRE) || isNaN(CGPA))
			alert("A number hasnt been enetered ")
		else
			alert("All are numbers") */
		console.log(GRE,CGPA)
		var url = window.location.href
		var uniName = url.split("=")
		uniName = uniName[1]
		console.log(uniName)
		if (isNaN(GRE) || isNaN(CGPA) || isNaN(Papers) || isNaN(TOEFL)){
				alert("A number hasnt been enetered ")
				return
			}
		else{
			GRE = parseFloat(GRE)
			CGPA = parseFloat(CGPA)
			Papers = parseFloat(Papers)
			TOEFL = parseFloat(TOEFL)
			var college = uniName; //props.name
			predictor(GRE,CGPA,Papers,TOEFL,college)




		}
			
		
	}


	function predictor (GRE,CGPA,Papers,TOEFL,college) {

		var WeightMatrix = []
		var avgDB = []
		var bias =[]
		firebase.database().ref("/Universities/"+college+ "/Predictor").once('value',(Supersnap)=>{
	
			
			Supersnap.forEach((weightMatrix)=>{
				if(weightMatrix.key=="W"){
					weightMatrix.forEach((arrayWeights)=>{
						//console.log( arrayWeights.val() , "arr")
						var temp = []
						arrayWeights.forEach((arr)=>{
							temp.push(arr.val())
						})
						WeightMatrix.push(temp)
			
					})
					
					var WM = weightMatrix.val()
				}
				else{
					weightMatrix.forEach((arrayWeights)=>{
						//console.log( arrayWeights.val() , "arr")
						var temp = []
						arrayWeights.forEach((arr)=>{
							temp.push(arr.val())
						})
						bias.push(temp)
			
					})
				}
				
				//console.log(typeof(WM))
			})
		
			
		
		}).then(()=>{
			console.log(WeightMatrix,"Matrix")
			console.log(bias,"Bias")
			//WeightMatrix=arr
			var l =[]
			var neurons = []
			for (i=0;i<WeightMatrix.length;++i){
				l.push(WeightMatrix[i][0].length)
			}
			l.push(1)
			for (i=0;i<l.length;++i){
				var temp=[]
				for(j=0;j<l[i];++j)
					temp.push(0)
				neurons.push(temp)
			}
		
			console.log(neurons,"Neurons")
		
			neurons[0] = [GRE/340.0, CGPA/10.0, Papers/6.0,  TOEFL/120.0]
		
			//console.log( sigmoid(dot_product(neurons[0],WeightMatrix[0][0]) + bias[0][0][0]) ,sigmoid(dot_product(neurons[0],WeightMatrix[0][1]) + bias[0][1][0]),sigmoid(dot_product(neurons[0],WeightMatrix[0][2]) + bias[0][2][0] ),"dot" )
			
			for(var i=1;i<neurons.length;++i){
				console.log(neurons[i].length,"no of neurons")
				for(var j=0;j<neurons[i].length;++j){
					//console.log(WeightMatrix[i-1][1],"weights")
					console.log(i,j,"I j vals")
					//console.log( dot_product(neurons[i-1],WeightMatrix[i-1][j]) )
		
		
					//console.log(neurons,"Neurons after dot")
					//console.log(WeightMatrix,"Weights after dot")
					
					/* console.log( sigmoid(dot_product(neurons[i-1],WeightMatrix[i-1][j])),"dot" )
					console.log(j) */
					neurons[i][j] = sigmoid( dot_product(neurons[i-1],WeightMatrix[i-1][j])+bias[i-1][j][0] )
					
				}
				
			}
		
		
			
		
			console.log(Math.round(neurons[neurons.length-1][0]*100),"Out")

			setState({
				predictedValue:Math.round(neurons[neurons.length-1][0]*100)
			})
	
			/* if( neurons[neurons.length-1][0] > 0.5)
				console.log("Class",1)
			else
				console.log("Class",0)
			var prediction = Math.round(neurons[neurons.length-1][0]*100)
			document.getElementById("Prediction").value = prediction */
		
		})
	}
	// After retriving value from firebase store it in the state using
	//	setState({
	// 	predictedValue: "retrieved value"
	// })

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				height: "auto",
			}}
		>
			<div
				style={{
					width: "80%",
					marginTop: "6%",
					alignItems: "center",
				}}
			>
				<div className="uppercase text-center text-gray-700 text-5xl font-bold tracking-wider">
					<h1>Predictor</h1>
				</div>
				<div
					className="grid grid-cols-2 gap-4 p-20"
					style={{ margin: "0", alignSelf: "center" }}
				>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							GRE Score
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
								onChange={(e)=>{GRE=e.target.value}}
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">GPA</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
								onChange={(e)=>{CGPA = e.target.value}}
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							Research Papers
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
								onChange={(e)=>{Papers=e.target.value}}
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							TOEFEL Score
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
								onChange={(e)=>{TOEFL = e.target.value}}
							/>
						</div>
					</div>
				</div>
				<div className="pt-20">
					<div
						className="bg-yellow-500 px-2 py-2 text-center rounded hover:bg-green-500 transition duration-100"
						style={{ width: "10%" }}
					>
						<button className="focus:outline-none uppercase text-xl text-gray-700 font-semibold" onClick={predict}>
							PREDICT
						</button>
					</div>
					<p className="text-left text-2xl pt-3">
						Your Chances of getting into the college is :
						<span className="">{state.predictedValue}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Predictor;