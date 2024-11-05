import React from "react";
//import NavLink from "../../atoms/NavLink/NavLink";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer bg-primary text-light py-4"> {/* Cambiar bg-dark a bg-primary */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <div className="footer__links mb-3">
                            <NavLink to="/about" label="Acerca de" className="footer__link" />
                            <NavLink to="/privacy" label="Privacidad" className="footer__link" />
                            <NavLink to="/contact" label="Contacto" className="footer__link" />
                        </div> */}
                        <p className="footer__copy">© 2024 Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
