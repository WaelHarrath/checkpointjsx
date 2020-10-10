import React from "react";
import "./App.css";
import srcImage from "./srcImg.png";
import "./style.css";
import vids from "./myVideo.mp4";

function App() {
  return (
    <div className="App">
      <div
        className="first-section"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1 className="title red">Wael Harrath</h1>
        <br />
        <img src={srcImage} alt="img In src"></img>
        <br />
        <img src="/publicImg.jpg" alt="img in public"></img>
      </div>
      <div className="second-section">
        <video width="800" height="500" controls>
          <source src={vids} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
