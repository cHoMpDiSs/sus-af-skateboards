import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Carousel from "../components/Carousel";

const Main = () =>{
    return (
        <div>
            <Header/>
            <VideoPlayer/>
            <div className="flex justify-center mb-32"> 
                <Carousel/>
            </div>
            <div className="container mx-auto">

            </div>
        </div>
       
    )
}

export default Main;