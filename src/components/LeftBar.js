    
import React, {Component} from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="fixed col-lg-3">

                <div className="list-group mb-4">
                    <a href="/kategori/emlak" className="list-group-item text-white bg-dark">EMLAK</a>
                    <a href="/kategori/vasita" className="list-group-item text-white bg-dark">VASITA</a>
                    <a href="/kategori/elektronik" className="list-group-item text-white bg-dark">ELEKTRONİK</a>
                    <a href="/kategori/giyim" className="list-group-item text-white bg-dark">GİYİM</a>
                    <a href="/kategori/kozmetik" className="list-group-item text-white bg-dark">KOZMETİK</a>
                    <a href="/kategori/aksesuar" className="list-group-item text-white bg-dark">AKSESUAR</a>
                    <a href="/kategori/diger" className="list-group-item text-white bg-dark">DİĞER</a>

                </div>

            </div>
        );
    }
}

export default LeftBar;