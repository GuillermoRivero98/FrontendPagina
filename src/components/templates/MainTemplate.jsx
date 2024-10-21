import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import "../../styles/templates/MainTemplate.css";

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