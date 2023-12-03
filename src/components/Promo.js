import React from "react";
import video1 from '../promo/snpvideo1.mp4';
import video2 from '../promo/snpvideo2.mp4';
import video3 from '../promo/snpvideo3.mp4';


export const Promo = () => {

    return(
        <div className="VideosDiv">
        <h1>Our design process</h1>
          <h2 className="VidName">Brainstorming</h2>
          <p className="SubName">We explore your idea to find the best design solution.</p>
          <video className="VideoTag" src={video1} controls></video>
          <h2 className="VidName" >Work work work</h2>
          <p className="SubName">We create an artwork that fits your idea the best.</p>
          <video className="VideoTag" src={video2} controls></video>
          <h2 className="VidName" >Play all day</h2>
          <p className="SubName">We play with various options before we choose the best.</p>
          <video className="VideoTag" src={video3} controls></video>
        </div>
    )
}