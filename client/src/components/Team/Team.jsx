import React from "react";
import "./Team.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import Button from "../Button/Button";

const Team = () => {
	return (
		<div className="team-component">
			<div className="head-title">
				<h2 className="heading">
					Our <span className="heading">Team</span>
				</h2>
				<p>
					Our team of talented and open-minded individuals makes Study Crew one of the most diverse sets of
					collaborators in the world.
				</p>
			</div>

			<div className="bg">
				<div className="team-cards">
					<div className="team-card">
						<img src={avatar1} alt="Member 1" />
						<h5>Jacob</h5>
						<p className="role">Founder</p>
					</div>

					<div className="team-card">
						<img src={avatar2} alt="Avatar" />

						<h5>Saket</h5>
						<p className="role">Head of Development</p>
					</div>

					<div className="team-card">
						<img src={avatar3} alt="Avatar" />
						<h5>Druvhil</h5>
						<p className="role">Development & Business</p>
					</div>

					<div className="team-card">
						<img src={avatar4} alt="Avatar" />
						<h5>Sushi</h5>
						<p className="role">UI/UX Designer</p>
					</div>

					<div className="team-card">
						<img src={avatar5} alt="Avatar" />
						<h5>Jona</h5>
						<p className="role">Marketing</p>
					</div>

					<div className="team-card">
						<img src={avatar6} alt="Avatar" />
						<h5>Sarah Akhtar</h5>
						<p className="role">UI/UX Designer</p>
					</div>
				</div>
			</div>
			
			<div className="join-team-section">
			<p>Interested in becoming part of our team?</p>
			<Button className="join-team-button">Join Us</Button>
			</div>
		</div>
	);
};

export default Team;
