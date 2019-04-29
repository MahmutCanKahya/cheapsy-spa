import React, {Component} from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="col-lg-3">

                <div className="list-group mb-4">
                    <a href="#" className="list-group-item text-danger bg-light">EMLAK</a>
                    <a href="#" className="list-group-item text-danger bg-light">VASITA</a>
                    <a href="#" className="list-group-item text-danger bg-light">ELEKTRONİK</a>
                    <a href="#" className="list-group-item text-danger bg-light">GİYİM</a>
                    <a href="#" className="list-group-item text-danger bg-light">KOZMETİK</a>
                    <a href="#" className="list-group-item text-danger bg-light">AKSESUAR</a>

                </div>

            </div>
        );
    }
}

export default LeftBar;