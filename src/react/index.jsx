import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import Header from "./component/header/Header";
import LeftSideBar from "./component/leftSideBar/leftSideBar";
import ImgContent from "./component/imgContent/imgContent";
import rightBar from "./component/rightBar/rightBar";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <LeftSideBar />
          <ImgContent />
          <RightBar />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
