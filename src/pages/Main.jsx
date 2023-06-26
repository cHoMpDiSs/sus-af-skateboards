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
            <VideoPlayer/>
            <div className="flex justify-center mb-32"> 
                <Carousel/>
            </div>
           
                <About/>
                <Footer/>
               
        </div>
       
    )
}

export default Main;