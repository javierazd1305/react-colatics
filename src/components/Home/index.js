import React, { Component } from 'react'
import Characteristic from "./Characteristic";
import Header from "./Header";
import Company from "./Company";
import Feature from "./Feature";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

export class index extends Component {
    render() {
        return (
            <div className="">
                <Navbar />
                <Header />
                <Company />
                <Feature />
                <Characteristic />
                <Service />
                <Contact />
                <Footer />

            </div>
        )
    }
}

export default index
