/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import Navbar from "./Navbar";
// import ScrollMenu from "../../General/ScrollMenu";


export default class Header extends Component {
  
  render() {
    
    // const computedClassName = props.active ? 'active' : 'muted';
    return (
      <header className="container-fluid">
        <Navbar />
       
      </header>
    );
  }
}
