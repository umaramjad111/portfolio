import React from 'react'
import { Grandizer, Khub, OwnImage } from "../utils/image";

export default function Home() {

    const projectsArr = [
        {
          name: "GRANDIZER",
          image: Grandizer,
        },
        {
          name: "KHUB PORTAL ECOMMERCE",
          image: Khub,
        },
        {
          name: "Grandizer",
          image: Grandizer,
        },
        {
          name: "Grandizer",
          image: Grandizer,
        }
      ]

  return (
    <div>
         <div className="container-fluid">
        <div
          className="row"
          style={{ height: "550px", background: "#000", color: "#fff" }}
        >
          <div className="col-lg-6 p-5">
            <div class="auto-write-container">
              <span class="typed-text">
                I'M A REACT JS <br />{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "80px",
                    fontWeight: "bolder",
                  }}
                >
                  DEVELOPER
                </span>{" "}
              </span>
              {/* <span class="cursor">|</span> */}
              <p>
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers
              </p>
              <button className="contact_btn mt-4 px-4 py-2">
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="col-lg-6 image-container">
            {/* <div class="image-container"> */}
            <div className="img1">
              <h2>WELCOME TO MY PORTFOLIO</h2>
              <p>
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers
                
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className="contact_btn mt-4 px-4 py-2">
                  PROJECTS
                </button>
              </div>
            </div>
            <div className="img2"></div>
          </div>
        </div>
      </div>
        {/* about us  */}
        <div style={{background:"gray" , width:"100%" , height:"1px"}}></div>
      <div className="container-fluid aboutus" style={{background:"#000"}}>
        <div className="row p-5">
        <div className="col-lg-6 col-sm-12">
          <div style={{position:"relative"}}>
          <div style={{position:"absolute" , top:"0"  , background:"yellow " , width:"500px" , height:"500px" , opacity:"5%" , borderRadius:"10%"}}></div>
            <img src={OwnImage} alt="" className="ownImage" />
          </div>
           
          </div>
          <div className="col-lg-6 col-sm-12">
          <h1 className="text-center">About us</h1>
          <h2>I AM AVAILABLE FOR <span style={{color:"red"}}>React JS/NEXT JS</span>  PROJECTS</h2>
          <p>As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers
                
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers
                As a React.js Developer developing high-performance web
                applications that redefine user experiences. You'll work closely
                with our cross-functional teams, including UI/UX designers</p>
          <p></p>
          <button className="contact_btn mt-4 px-4 py-2">
                  CONTACT US
                </button>
          </div>
         

        </div>
      </div>
      
      {/* projects */}
      <div style={{background:"gray" , width:"100%" , height:"1px"}}></div>
      <div style={{background:"#000" , color:"#fff"}}>
      <h1 className="text-center pt-4">RECENT PROJECTS</h1>
      <div className="container-fluid">
        <div className="row mt-3" style={{display:"flex" , justifyContent:"center"}}>
          { projectsArr.map((item , i ) => 
          (
            <div className="col-lg-3 col-sm-10 project ms-4"  >
              <div>
              <img src={item.image} alt="" />
              <h5 className="text-center mt-3">{item.name}</h5>
              </div>
            
            </div>
          )) }
        </div>
      </div>
      </div>
    </div>
  )
}
