import Card from "../../components/viewall/card";

const Viewall = () => {
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
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Viewall;
