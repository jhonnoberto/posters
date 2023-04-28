import React from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Pickup from "../../components/pickup/pickup";
import Templates from "../../components/template/templates";
import Memories from "../../components/memories/memories";
import Footer from "../../components/footer/footer";
import "./home.scss"

function Home() {
    return (
        <div className="home">
            <Header />
            <Navbar />
            <Pickup />
            <Templates />
            <Memories />
            <Footer />
        </div>
    )
}

export default Home