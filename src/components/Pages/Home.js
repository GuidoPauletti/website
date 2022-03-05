import React from "react";
import { Header } from "../Common/Header";
import image from "../Assets/img/header-bg.jpg"


export const Home = () => (
    <Header
        title = "Welcome To Our Studio!"
        subtitle = "IT'S NICE TO MEET YOU"
        buttonText = "tell me more"
        showButton = {true}
        link = "/services"
        image = {image}
    />
)