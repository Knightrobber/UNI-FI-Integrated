import firebase from '../../firebase/firebase.js'
import Router from 'next/router'
const Card = (props) => {
	return (
		<div
			style={{
				boxShadow:
					"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			}}
			className="mt-10 p-4 rounded-sm border-r-4 border-yellow-500 hover:border-green-600 transition duration-200"
		>
			<div className="">
				{/* {()=>{
					console.log(props.course,"Form cards js")
					if(props.course!=""){
					
					return(
						<div className="pl-20 text-gray-600 font-semibold text-2xl tracking-wide">
							{props.course}
						</div>
				)

				}
			}
				} */}
				<div className="pl-20 text-gray-600 font-semibold text-2xl tracking-wide">
					{props.course}
				</div>
				<div className="pl-20 pb-5 text-black font-semibold text-4xl tracking-wide">
					{props.name}
				</div>

				<div className="grid grid-cols-3 pr-10 pl-10">
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg Salary -
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.avgSalary}
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg Tuition fee
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.avgTuitionFee}
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Acceptance Rate
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.acceptanceRate} %
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg GRE Score
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.avgGRE}
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg TOEFL Score
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.avgTOEFL}
						</div>
					</div>
					<div className="pt-1 pl-10 grid grid-rows-2 gap-0">
						<label className="text-gray-600 text-lg font-medium tracking-wide">
							Avg GPA
						</label>
						<div className="focus:ouline-none text-gray-900 tracking-wider pl-1">
							{props.avgGPA}
						</div>
					</div>
					<div className="mt-5" style={{ position: "relative"}}>
						<div className="rounded-sm inline-block ml-4 px-3 py-1 m-2 bg-yellow-500 hover:bg-green-600 bg-gradient-to-r hover:translate-x-3 transform transition duration-200">
							<button className="uppercase text-right font-semibold text-2xl text-white tracking-wider focus:outline-none" onClick={()=>{
								console.log(props.course,"Course form card js")
								if (props.course==""){
									console.log("Pushing university page")
									Router.push({
										pathname: '/universityPage',
										  query: { uniName: props.dbName }
									})
								}
								else{
									console.log("pushing course page")
									var urlStr = props.dbName+"="+props.course
									Router.push({
										pathname: '/coursePage',
										  query: { uniName: urlStr }
									})
								}
								
							}}>
								View
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
