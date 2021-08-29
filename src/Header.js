import React from "react";
import logo from "./image/logo.png"

const Header=()=>
{
    return(
        <>
        <div className="header">
          <img src={logo} alt="" />
          <h1>Keshav Keep</h1>
        </div>
        </>
    )
}
export default Header;