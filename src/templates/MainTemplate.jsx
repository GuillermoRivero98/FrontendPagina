import React from "react";
import "./MainTemplate.css";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const MainTemplate = ({ children }) => {
    return (
        <div className="main-template">
            <Header />
            <main className="main-content__content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainTemplate;