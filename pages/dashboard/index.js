import { useState } from "react";
import AcadProfile from "../../components/dashboardcomponents/acadProfile";
import Sidenav from "../../components/dashboardcomponents/sideNav";
import UserProfile from "../../components/dashboardcomponents/userProfile";

function index() {
	const [data, setData] = useState(true);
	return (
		<>
			<div className="">
				<Sidenav data={(info) => setData(info)} />
				{data ? <UserProfile /> : <AcadProfile />}
			</div>
		</>
	);
}

export default index;
