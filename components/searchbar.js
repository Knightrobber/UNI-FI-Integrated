import { useState } from "react";
import Link from "next/link";
import Card from "./searchbarcomponent/card";

import firebase from '../firebase/firebase.js'
import Router from 'next/router'
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {

		var username = user.email;
		console.log("The user is " + username)



	}
	else {
		console.log("no user signed in")
	}

})

var results=[]
var SearchStrURL = ""
const Searchbar = () => {
	const [state, setState] = useState({ trigger: "",resultsState:[] });
	//var results=[]
	const Search = (e) => {
		setState({
			trigger: e.target.value,
		})

		console.log(e.target.value)

		
		var searchStr = e.target.value
		SearchStrURL = searchStr
		var SearchResults = []
		//console.log(searchStr,"search str",searchStr.length)
		if (searchStr.length>0){
		firebase.database().ref("Universities").once('value',(snap)=>{ // query to get the Uni information using keyword
			// if the keyword is present in either the univeristy name or the courses offered by the univeristy, that University information is stored
			snap.forEach((subSnap)=>{
				//console.log(typeof(subSnap.key))
				//console.log(subSnap.key,"Every univeristy")
				if (subSnap.key.toLowerCase().includes(searchStr.toLowerCase()) || subSnap.val().Name.toLowerCase().includes(searchStr.toLowerCase())){
					var temp = new Object()
					//temp.name = subSnap.key
					temp.name = subSnap.val().Name
					temp.location = subSnap.val().Location
					temp.courses = []
	
					var tempCourses = subSnap.val().Courses
					/* for (i=0;i<tempCourses.length;++i)
						if (tempCourses[i].toLowerCase().includes(searchStr))
							temp.courses.push(tempCourses[i]) */
	
					for (const course in tempCourses) {
						if (course.toLocaleLowerCase().includes(searchStr.toLowerCase()))
							temp.courses.push(course);
						}
						
					SearchResults.push(temp)
				}
				else{
					var temp = new Object()
					temp.courses = []
					var tempCourses = subSnap.val().Courses
					//console.log(tempCourses,"The courses")
	
					/* for (i=0;i<tempCourses.length;++i)
						if (tempCourses[i].toLowerCase().includes(searchStr))
							temp.courses.push(tempCourses[i]); */
	
					for (const course in tempCourses) {
						if (course.toLocaleLowerCase().includes(searchStr.toLowerCase()))
							temp.courses.push(course);
						}
					
					if (temp.courses.length!=0){
						temp.name = subSnap.val().Name
						temp.location = subSnap.val().Location
						
						SearchResults.push(temp)
					}
	
					
				}
			})
		}).then(()=>{
			// printing the query results. If the uni
			
	
			
				
				console.log(SearchResults,"Results") 
				results = SearchResults
				setState({
					resultsState:results
				})

				//console.log(results,"Global results")


			
	
	
	
			
	
			
	
	
	
			
	
		})
	
	
	}
	else{
		results = SearchResults
				setState({
					resultsState:results
				})
	}
	
	


	};


	function genCards() {
		console.log("In gen cards",results,"results")
		var UI = []
		if(results.length!=0){
			results.map((item,index)=>{
				console.log(item,"item",item.courses)
				var courseStr = ""
				for (var i=0;i<item.courses.length;++i)
					courseStr+= item.courses[i] + ","
				UI.push(
					<Card name={item.name} address={item.location} courses={courseStr}/>
				)
			})
		
			return(
				UI
			)
		}
		else
			return
		
	};
	return (
		<div
			style={{ position: "absolute", width: "50%", left: "24.5%", top: "50%" }}
		>
			<div
				className="focus:outline-none hover:scale-110"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					boxShadow:
						"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
				}}
			>
				<div style={{ width: "100%" }}>
					<input //input
						style={{ outline: "none", width: "100%" }}
						className="text-gray-600 text-lg px-2 py-3"
						id="search"
						type="text"
						onChange={e => Search(e)}
						placeholder="Search for Universities Worldwide..."
					/>
				</div>
				
					<div style={{ backgroundColor: "#FFA500" }}>
						<div
							onClick={() => {Router.push({
								pathname: '/viewall',
  								query: { searchStr: SearchStrURL }
							})}}
							className="hover:bg-green-500 duration-100"
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<svg
								style={{ margin: "13.5" }}
								width="25"
								height="25"
								viewBox="0 0 30 30"
								fill="none"
									xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.4408 18.8679H20.0858L19.6055 18.4048C21.2864 16.4494 22.2985 13.9108 22.2985 11.1492C22.2985 4.99142 17.307 0 11.1492 0C4.99142 0 0 4.99142 0 11.1492C0 17.307 4.99142 22.2985 11.1492 22.2985C13.9108 22.2985 16.4494 21.2864 18.4048 19.6055L18.8679 20.0858V21.4408L27.4443 30L30 27.4443L21.4408 18.8679ZM11.1492 18.8679C6.87822 18.8679 3.43053 15.4202 3.43053 11.1492C3.43053 6.87822 6.87822 3.43053 11.1492 3.43053C15.4202 3.43053 18.8679 6.87822 18.8679 11.1492C18.8679 15.4202 15.4202 18.8679 11.1492 18.8679Z"
									fill="black"
								/>
							</svg>
						</div>
					</div>
				
				{state.trigger === "" ? null : (
					<div
						className="bg-gray-100"
						style={{
							position: "absolute",
							top: "100%",
							width: "100%",
						}}
					>
						{genCards()}
						
							
						
						{/* <Card name="sajal" address="cjhdvvhcbdvj" />
						<Card
							name="ckjvdb"
							address="jnrjg j  nfjn rkjnfjrnglj jgnnvljrn lrlk "
						/>
						<Card name="sajvdsjknal" address="fm rkj nfgjjrenjg ern gkjr n" />
						<Card
							name="cksd vjk"
							address=" jdfvjndflmfcvlfdnb kjtc jg bgfjgnkjt s "
						/>
						<Card
							name="sjcbd"
							address="cdknvkjndfbsjnlbngfsbnnblkfsdx clkernfkngfxmkclvm xkn  mbgb"
						/> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default Searchbar;
