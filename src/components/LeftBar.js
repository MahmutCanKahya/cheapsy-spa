import React, {Component} from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="col-lg-3">

                <div className="list-group mb-4">
                    <a href="/kategori/emlak" className="list-group-item text-danger bg-light">EMLAK</a>
                    <a href="/kategori/vasita" className="list-group-item text-danger bg-light">VASITA</a>
                    <a href="/kategori/elektronik" className="list-group-item text-danger bg-light">ELEKTRONİK</a>
                    <a href="/kategori/giyim" className="list-group-item text-danger bg-light">GİYİM</a>
                    <a href="/kategori/kozmetik" className="list-group-item text-danger bg-light">KOZMETİK</a>
                    <a href="/kategori/aksesuar" className="list-group-item text-danger bg-light">AKSESUAR</a>

                </div>

            </div>
        );
    }
}

export default LeftBar;