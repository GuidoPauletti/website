import React from "react";
import { PortfolioItem } from "../Common/PortfolioItem";
import { Header } from "../Common/Header";
import image from "../Assets/img/portfolio.jpg"

const portfolioItem = [
    {title: "Threads", subtitle: "Illustration", image: "assets/img/portfolio/1.jpg"},
    {title: "Explore", subtitle: "Graphic Design", image: "assets/img/portfolio/2.jpg"},
    {title: "Finish", subtitle: "Identity", image: "assets/img/portfolio/3.jpg"},
    {title: "Lines", subtitle: "Branding", image: "assets/img/portfolio/4.jpg"},
    {title: "Southwest", subtitle: "Website Design", image: "assets/img/portfolio/5.jpg"},
    {title: "Window", subtitle: "Photography", image: "assets/img/portfolio/6.jpg"}
];

export const Portfolio = () => (
    <div>
        <Header
            title = "This is our work"
            subtitle = "WE MADE IT FOR YOU"
            showButton = {false}
            image = {image}
        />
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolioItem.map((item, index) => (
                        <PortfolioItem {...item} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    </div>
    
)