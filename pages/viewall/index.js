import Card from "../../components/viewall/card";
import firebase from '../../firebase/firebase.js'
import { useState, useEffect  } from "react";
var results=[]
var updatedFlag=0
const Viewall = (props) => {
	//console.log(window.location.href)
	var url = window.location.href
	//console.log(typeof(window.location.href),"Type")
	const [state, setState] = useState({ dummy:0 });

	
	useEffect(() => {
		// Update the document title using the browser API
		//document.title = `You clicked ${count} times`;
		var SearchStr =  url.split('=')
		SearchStr = SearchStr[1]
		//console.log(SearchStr,"The Search String")
		if (SearchStr.includes('+')){
			SearchStr = SearchStr.split('+')
			SearchStr = SearchStr[0]
		}
		/* if(updatedFlag==0)
			search(SearchStr) */
		search(SearchStr)
	  });
	//search(SearchStr)
	function search  (searchStr)  {
		var SearchResultsUni = []
		var SearchResultsCourse = []
		var SearchResults = []
		var searchString = searchStr
		//console.log(searchString)
		if (searchString.length > 0) {
			firebase.database().ref("Universities").once('value', (snap) => {
				snap.forEach((subSnap) => {
				

					if (subSnap.key.toLowerCase().includes(searchString.toLowerCase())  || subSnap.val().Name.toLowerCase().includes(searchString.toLowerCase())) {
						//console.log("match");
						var temp = new Object()
						//temp.name = subSnap.key
						temp.name = subSnap.val().Name
						temp.dbName = subSnap.key
						temp.location = subSnap.val().Location
						temp.country = subSnap.val().Country
						temp.tuition = subSnap.val().Annual_Tuition
						temp.livingExp = subSnap.val().Living_Expenses
						temp.accRate = subSnap.val().Acceptance_Rate
						temp.avgGRE = subSnap.val().Avg.GRE
						temp.avgTOEFL = subSnap.val().Avg.TOEFL
						//temp.avgGRE = subSnap.Avg.val().GRE
						//console.log(temp.avgGRE,"GRE GREGREGREGREGRE")
						SearchResultsUni.push(temp)
					}
					subSnap.forEach((subsubSnap) => {
						if (subsubSnap.key == "Courses") {
							subsubSnap.forEach((subsubsubSnap) => {
								if (subsubsubSnap.key.toLowerCase().includes(searchString.toLowerCase())) {
									//console.log("match");
									var temp = new Object()
									//temp.name = subSnap.key
									temp.name = subSnap.val().Name
									temp.dbName = subSnap.key
									temp.location = subSnap.val().Location
									temp.course = subsubsubSnap.key
									temp.country = subSnap.val().Country
									temp.tuition = subSnap.val().Annual_Tuition
									temp.livingExp = subSnap.val().Living_Expenses
									temp.accRate = subSnap.val().Acceptance_Rate
									temp.avgGRE = subSnap.val().Avg.GRE
									temp.avgTOEFL = subSnap.val().Avg.TOEFL
									//temp.avgGRE = subSnap.Avg.val().GRE
									//console.log(subSnap.Avg.val().GRE,"GRE GREGREGREGREGRE")
									SearchResultsCourse.push(temp)
								}
							})
						}
					})
				})
			}).then(() => {
				//console.log(SearchResultsUni)
				//console.log(SearchResultsCourse)
				SearchResults = SearchResultsUni.concat(SearchResultsCourse)
				//console.log(SearchResults)
				results = SearchResults
				setState({
					dummy:1
				})
				updatedFlag=1

				//addNodeSearch()
				/* for (i = 0; i < SearchResults.length; ++i){
					addNodeSearch(SearchResults[i].name, SearchResults[i].location)
				} */
				//filters()
				//document.getElementById("searchres").value = SearchResults //DISPLAYS OBJECTS IN TEXT AREA - FIX
			})
		}
	
	
	}


	function genViewAllCards(){
		var UI=[]
		if(results.length!=0){
			for(var i=0;i<results.length;++i){
				//console.log(results[i].course,"Course status")
				if (results[i].course!=null){
					UI.push(
						<Card name={results[i].name} avgSalary={100} avgTuitionFee={results[i].tuition} acceptanceRate={results[i].accRate} avgGRE={results[i].avgGRE} avgGPA={9.0} avgTOEFL = {results[i].avgTOEFL} course={results[i].course} dbName={results[i].dbName}/>
					)
				}
				else{
					UI.push(
						<Card name={results[i].name} avgSalary={100} avgTuitionFee={results[i].tuition} acceptanceRate={results[i].accRate} avgGRE={results[i].avgGRE} avgGPA={9.0} avgTOEFL = {results[i].avgTOEFL} course="" dbName={results[i].dbName}/>
					)
				}
			}
			return UI
		}
		
	}
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
					width: "70%",
					marginTop: "5%",
				}}
			>
				<div className="text-center text-3xl font-medium tracking-wider">
					Search Results
				</div>
				{genViewAllCards()}
				{/* <Card name="Carnegie Mellon University" avgSalary={100} avgTuitionFee={100} acceptanceRate={100} avgGRE={330} avgGPA={9.0}/> */}
				
			</div>
		</div>
	);
};

export default Viewall;
