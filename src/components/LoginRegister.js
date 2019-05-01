import React, {Component} from 'react';
import OutsideAlerter from '../actions/OutsideClick';

class LoginRegister extends Component {
    render() {
        return (
                <div className='popup'>
                    <OutsideAlerter closePopup={this.props.closePopup}>

                    <div className='popup_inner'>
                        <h1>Selam</h1>
                        <button onClick={this.props.closePopup}>close me</button>
                    </div>
                    </OutsideAlerter>

                </div>

        );
    }
}

export default LoginRegister;