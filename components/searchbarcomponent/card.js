const Card = (props) => {
	return (
		<div>
			<div className="text-gray-900 p-2 px-4">
				<p style={{ fontSize: "20px" }} className="font-normal tracking-wider">
					{props.name}
				</p>
				<p style={{ fontSize: "16px" }} className="font-light tracking-wider">{props.address}</p>
				<p style={{ fontSize: "16px" }} className="font-light tracking-wider">{props.courses}</p>
			</div>
		</div>
	);
};

export default Card;
