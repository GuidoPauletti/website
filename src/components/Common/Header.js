import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => (
    <header className="masthead" style={{backgroundImage: `url("${props.image}")`}}>
        <div className="container">
            <div className="masthead-subheading">{props.title}</div>
            <div className="masthead-heading text-uppercase">{props.subtitle}</div>
            { props.showButton &&  
            <Link className="btn btn-primary btn-xl text-uppercase" to={props.link}>{props.buttonText}</Link>
            }
            
        </div>
    </header>
)