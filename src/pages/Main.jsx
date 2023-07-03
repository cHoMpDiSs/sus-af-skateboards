import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import About from "../components/About";

const Main = () =>{
    return (
        <div>
            <Header/>
            <div className="lg:mr-48 lg:ml-48">
                <VideoPlayer/>
            </div>
            <div className="flex justify-center mb-20"> 
                <Carousel/>
            </div>
                <About/>
                <Footer/>
        </div>
       
    )
}

export default Main;