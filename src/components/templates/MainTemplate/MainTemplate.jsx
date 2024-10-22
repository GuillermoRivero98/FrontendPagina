import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./MainTemplate.scss";

const MainTemplate = ({ children }) => {
    return (
        <div className="main-template">
            <Header />
            <main className="main-template__content container">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainTemplate;
