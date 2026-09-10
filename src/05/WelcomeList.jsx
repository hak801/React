import React from "react";
import Welcome from "./Welcome";
import "./Welcome.css";

function WelcomeList() {
    return(
        <div>
            <Welcome name={"주인공"} colorClass={`red`}/><br/>
            <Welcome name={"박카스"} colorClass={`green`}/><br/>
            <Welcome name={"이무이무"} colorClass={`blue`}/><br/>
        </div>
    );
}

export default WelcomeList;