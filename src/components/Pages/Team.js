import React from "react";
import { TeamItem } from "../Common/TeamItem";
import image from "../Assets/img/team.jpg";
import { Header } from "../Common/Header";

const TeamPerson = [
    {name: "Parveen Anand", title: "Lead Designer", image: "assets/img/team/1.jpg"},
    {name: "Diana Petersen", title: "Lead Marketer", image: "assets/img/team/2.jpg"},
    {name: "Larry Parker", title: "Lead Developer", image: "assets/img/team/3.jpg"}
]

export const Team = () => (
    <div>
    <Header
        title = "Meet us"
        subtitle = "WE JUST HAVING A GOOD TIME"
        showButton = {false}
        image = {image}
    />
    <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {TeamPerson.map((person, index) => (
                        <TeamItem
                            {...person} key={index}
                        />
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    </div>
)
    
