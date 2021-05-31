import Link from "next/link";
import { useState, useEffect } from "react";
import firebase from '../../firebase/firebase.js'
import Router from 'next/router'
console.log(window.location.href,"Global index.js")

var uniInfo = []
var url = window.location.href
var uniName = url.split("=")
uniName = url[1]


var updatedFlag=0
const UniversityPage = (props) => {
	const [state, setState] = useState({
		UniversityName: "University of Wisconsin - Madison",
		universityAddress:
			"500 Lincoln Drive Madison, Wisconsin 53706 United States",
		temp:0,
		GRE:0,
		GPA:0,
		Papers:0,
		TOEFL:0,
		Tuition:0,
		Enrolled:0,
		Description:'',
		AcceptanceRate:0,
		uniDbName:'',
		students:''
	});
	const [view, setView] = useState(false);
	useEffect(()=>{
		var url = window.location.href
		var uniName = url.split("=")
		uniName = uniName[1]
		uniName = uniName.split("%40")
		console.log(uniName)
		var courseName = uniName[1]
		uniName = uniName[0]
		console.log(uniName,courseName)
			mountInfo(uniName)
			/* firebase.database().ref('/').once('value',(snap)=>{
				console.log('db query')
				setState({temp:1})

				updatedFlag=1
			}) */
		
		
	})


	function mountInfo(uniName){
		console.log("Mount called")
		var uniInfoObj = new Object()
		firebase.database().ref("/Universities/"+uniName).once('value',(uni)=>{
			uni.forEach((uniAttribute)=>{
				//console.log(uniAttribute.key,"The attributes")
				if(uniAttribute.key == "Avg"){
					uniInfoObj.GRE = uniAttribute.val().GRE
					uniInfoObj.GPA = uniAttribute.val().GPA
					uniInfoObj.Papers = uniAttribute.val().Papers
					uniInfoObj.TOEFL = uniAttribute.val().TOEFL
				}
				else if(uniAttribute.key=="Courses"){
					var coursesStr = ""
					var totalEnrolled = 0
					uniAttribute.forEach((course)=>{
						coursesStr+= course.key + " ,"

						course.forEach((program)=>{
							
							console.log(typeof(program.val().Enrolled),"type")
							totalEnrolled+= program.val().Enrolled
							console.log(totalEnrolled,"total enrolled")
						})

					})
					uniInfoObj.Courses = coursesStr
					uniInfoObj.totalEnrolled = totalEnrolled
				}
				
			})
			uniInfoObj.acptRate = uni.val().Acceptance_Rate
			uniInfoObj.tuition = uni.val().Annual_Tuition
			uniInfoObj.desc = uni.val().Description
			uniInfoObj.location = uni.val().Location
			uniInfoObj.name = uni.val().Name
			uniInfoObj.students = uni.val().Students
		}).then(()=>{
			uniInfo.push(uniInfoObj)
			updatedFlag=1
			setState({
				temp:1,GRE:uniInfoObj.GRE,GPA:uniInfoObj.GPA,Papers:uniInfoObj.Papers,TOEFL:uniInfoObj.TOEFL,
				Tuition:uniInfoObj.tuition,universityAddress:uniInfoObj.location,Enrolled:uniInfoObj.totalEnrolled,
				AcceptanceRate:uniInfoObj.acptRate, Description:uniInfoObj.desc, UniversityName:uniInfoObj.name,
				uniDbName:uniName,students:uniInfoObj.students
			})

			console.log(uniInfoObj,"The object")
			
			
		})
	}

	

	
		return (
			<div className="h-screen bg-gray-100">
			<div className="p-20 flex">
				<div className="w-1/2 p-10">
					<p
						style={{ fontSize: "60px" }}
						className="font-semibold pt-20 text-gray-700"
					>
						{state.UniversityName}
					</p>
					<p
						style={{ fontSize: "24px" }}
						className="w-3/5 pt-10 font-semibold text-gray-700"
					>
						{state.universityAddress}
					</p>
				</div>
				<div className="w-1/2 p-10">
					<div
						style={{
							margin: "auto",
							width: "20%",
							marginTop: "25%",
						}}
					>
						<button
							className="focus:outline-none px-5 py-2 uppercase text-2xl text-gray-700 rounded hover:bg-green-500 duration-100 transition bg-yellow-500"
							onClick={() => {
								Router.push({
									pathname: "/predictor",
									query: { uniName: state.uniDbName },
								});
							}}
						>
							PREDICT
						</button>
					</div>
				</div>
			</div>
			<hr
				style={{ width: "90%", margin: "auto" }}
				className="border-1 border-gray-300 border-black"
			/>
			<div className="grid grid-cols-3 gap-4 p-2">
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Enrolled
					</h1>
					<div className="p-20">
						<h1 className="font-normal text-2xl text-center">
							{state.Enrolled} students
						</h1>
						<div className="m-auto w-1/2 pt-5">
							{view ? (
								<div>
									<p className="text-lg font-black text-center flex-wrap">
										{state.students}
									</p>
								</div>
							) : (
								<div className="m-auto w-1/2">
									<button
										onClick={() => setView(!view)}
										className="mt-2 rounded font-semibold text-sm uppercase px-6 py-2 bg-gray-200 transition transform duration-200 focus:outline-none hover:bg-gray-500"
									>
										View Students
									</button>
								</div>
							)}
						</div>
					</div>
					
				</div>

				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Admitted Profile
					</h1>
					<div className="grid grid-row-4 gap-2 p-20">
						<h1 className="font-normal text-2xl text-center">
							Avg GRE - {state.GRE}
						</h1>
						<h1 className="font-normal text-2xl text-center">
							Avg GPA - {state.GPA}
						</h1>
						<h1 className="font-normal text-2xl text-center">
							Avg Papers - {state.Papers}
						</h1>
						<h1 className="font-normal text-2xl text-center">
							Avg TOFEL - {state.TOEFL}
						</h1>
					</div>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Annual fee
					</h1>
					<div className="grid grid-row-4 gap-2 p-20">
						<h1 className="font-normal text-2xl text-center">
							${state.Tuition}
						</h1>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
					Description
				</h1>
				<div className="">
					<h1 className="font-normal text-xl text-center">
						{state.Description}
					</h1>
				</div>
			</div>
		</div>
		);
	
	
};

export default UniversityPage;