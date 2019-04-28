import React, {Component} from 'react';
import '../css/ustBar.css'

class NavBar extends Component {
    render() {
        return (

                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div className="container">
                            <a className="navbar-brand" id="logo"  href="#">CHEAPSY</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" id="giriskayit">GİRİŞ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="giriskayit" href="#">KAYIT OL</a>
                                    </li>
                                    {/* BURASI LOGİN İŞLEMİ YAPILDIKTAN SONRA ACILCAK
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ÇIKIŞ</a>
                                </li>*/}
                                    <li className="nav-item bg-warning">
                                        <a className="nav-link" id="sat" href="#">HEMEN SAT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
        );
    }
}

export default NavBar;