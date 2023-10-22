import React from "react";
import "./Team.css";
import Button from "../Button/Button";

import teamMembers from '../../data/teamData'; // Adjust the path

const Team = () => {
  return (
    <div className="team-component">
      {/* ... other parts of the component ... */}
      
      <div className="bg">
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.avatar} alt={member.name} />
              <h5>{member.name}</h5>
              <p className="role">{member.role}</p>
            </div>
          ))}
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
