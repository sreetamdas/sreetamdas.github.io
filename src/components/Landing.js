import React from "react";
import CustomNav from "./Navbar";
// import Overlay from "./Overlay";

class Landing extends React.Component {
	render() {
		return (
			<div className="black-bg white full-page">
				<CustomNav />
				<div style={{ fontSize: "40px" }}>
					<div style={{ paddingTop: "200px" }}>
						Hey!<br />I'm Sreetam Das.
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;