import Link from "next/link";
import { useState, useEffect } from "react";
import firebase from '../../firebase/firebase.js'
import Router from 'next/router'
const UniversityPage = () => {
	const [state, setState] = useState({
		courseName: "Computer Science and Engineering",
		universityName: "University of Wisconsin - Madison",
		universityAddress:'',
		bachelorDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		masterDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		pHDdescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		GRE:0,
		GPA:0,
		Papers:0,
		TOEFL:0,
		EnrolledB:0,
		EnrolledM:0,
		EnrolledP:0,
		Tuition:0,
		Description:''

	});
	useEffect(()=>{
		var url = window.location.href
		var uniName = url.split("=")
		var courseName = ""
		uniName = uniName[1]
		uniName = uniName.split("%")
		courseName = uniName[1]
		uniName = uniName[0]
		courseName = courseName.split("D")
		courseName = courseName[1]
		console.log(courseName)
		console.log(uniName)


			mountInfo(uniName,courseName)
			/* firebase.database().ref('/').once('value',(snap)=>{
				console.log('db query')
				setState({temp:1})

				updatedFlag=1
			}) */
		
		
	})

	function mountInfo(uniName,courseName){
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
					var enrolledB = 0
					var enrolledM = 0
					var enrolledP = 0

					/* uniAttribute.forEach((course)=>{
						coursesStr+= course.key + " ,"

						course.forEach((program)=>{
							
							//console.log(typeof(program.val().Enrolled),"type")
							//totalEnrolled+= program.val().Enrolled
							if (program.key=="Bachelors")
								enrolledB = program.val().Enrolled
							if (program.key=="Masters")
								enrolledM = program.val().Enrolled
							if (program.key=="PhD")
								enrolledP = program.val().Enrolled
							//console.log(totalEnrolled,"total enrolled")
						})

					}) */

					uniAttribute.forEach((course)=>{
						//coursesStr+= course.key + " ,"
						if (course.key == courseName){
							course.forEach((program)=>{
							
								//console.log(typeof(program.val().Enrolled),"type")
								//totalEnrolled+= program.val().Enrolled
								if (program.key=="Bachelors")
									enrolledB = program.val().Enrolled
								if (program.key=="Masters")
									enrolledM = program.val().Enrolled
								if (program.key=="PhD")
									enrolledP = program.val().Enrolled
								//console.log(totalEnrolled,"total enrolled")
							})
						}
						

					})


					//uniInfoObj.Courses = coursesStr
					//uniInfoObj.totalEnrolled = totalEnrolled
					//console.log(enrolledB,enrolledM,"Enrolled peeps")
					uniInfoObj.enrolledB = enrolledB
					uniInfoObj.enrolledM = enrolledM
					uniInfoObj.enrolledP = enrolledP
				}
				
			})
			uniInfoObj.acptRate = uni.val().Acceptance_Rate
			uniInfoObj.tuition = uni.val().Annual_Tuition
			uniInfoObj.desc = uni.val().Description
			uniInfoObj.location = uni.val().Location
			uniInfoObj.name = uni.val().Name
		}).then(()=>{
			//uniInfo.push(uniInfoObj)
			//updatedFlag=1

			var courseNameFinal;
			if (courseName=="CSE")
				courseNameFinal="Computer Science and Engineering "
			if (courseName=="ECE")
				courseNameFinal="Electronincs and Communication engineering "
			if (courseName == "EEE")
				courseNameFinal="Electronincs and electrical engineering "
			if (courseName == "BBA")
				courseNameFinal="Bachelors of Business administration "
			if (courseName == "SOC")
				courseNameFinal="Sociology"
			if (courseName == "Chem")
				courseNameFinal="Chemistry"
			if (courseName == "Mech")
				courseNameFinal="Mechanical"
			if (courseName == "History")
				courseNameFinal="History"

				
			console.log(uniInfoObj,"The object")
			setState({
				GRE:uniInfoObj.GRE,GPA:uniInfoObj.GPA,Papers:uniInfoObj.Papers,TOEFL:uniInfoObj.TOEFL,
				Tuition:uniInfoObj.tuition, universityAddress:uniInfoObj.location,/*  Enrolled:uniInfoObj.totalEnrolled */EnrolledB:uniInfoObj.enrolledB, EnrolledM:uniInfoObj.enrolledM ,EnrolledP:uniInfoObj.enrolledM,
				/* AcceptanceRate:uniInfoObj.acptRate */  Description:uniInfoObj.desc, UniversityName:uniInfoObj.name, courseName:courseNameFinal, uniDbName:uniName
			})

			//console.log(uniInfoObj,"The object")
			
			
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
						{state.courseName}
					</p>
					<p
						style={{ fontSize: "24px" }}
						className="w-3/5 pt-10 font-semibold text-gray-700"
					>
						{state.UniversityName}
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
							className="px-5 py-2 uppercase text-2xl text-gray-700 rounded hover:bg-green-500 duration-100 transition bg-yellow-500"
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
			<div className="grid grid-cols-3 gap-4 p-10">
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						Bachelor's Enrolled
					</h1>
					<p className="p-10">{state.bachelorDescription}</p>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Students {state.EnrolledB} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Tuition Fee {state.Tuition} 
					</h1>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						Masters Enrolled
					</h1>
					<p className="p-10">{state.bachelorDescription}</p>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Students {state.EnrolledM} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Tuition Fee {state.Tuition} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Avg GRE {state.GRE} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Avg CGPA {state.GPA} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Avg TOEFL {state.TOEFL} 
					</h1>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						PHDs Enrolled
					</h1>
					<p className="p-10">{state.bachelorDescription}</p>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Students {state.EnrolledP} 
					</h1>
					<h1 className="text-center text-xl font-normal text-gray-700">
						Tuition Fee {state.Tuition} 
					</h1>
				</div>
			</div>
		</div>
	);
};

export default UniversityPage;3