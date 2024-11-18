import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const Home = () => {
    return (
        <MainTemplate>
            <div className="container mt-5 text-center">
                <h1 className="mb-4">Bienvenido</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/clase-a" className="btn btn-lg btn-primary w-100">
                            Camino a Pasitos
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/clase-b" className="btn btn-lg btn-secondary w-100">
                            La Quermesina
                        </Link>
                    </div>
                </div>
            </div>
        </MainTemplate>
    );
};

export default Home;
