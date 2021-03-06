import React from "react";

export const TeamItem = (props) => (
    <div className="col-lg-4">
        <div className="team-member">
            <img className="mx-auto rounded-circle" src={props.image} alt="..." />
            <h4>{props.name}</h4>
            <p className="text-muted">{props.title}</p>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
)
    
