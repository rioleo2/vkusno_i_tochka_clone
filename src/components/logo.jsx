import React from "react";
import './logo.css'

export default function Logo(logoUrl) {
    return (<a href="#"><img src={logoUrl.logoUrl} alt="" className="logo"></img></a>)
}