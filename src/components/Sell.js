import React, {Component} from 'react';
import '../css/sell.css';
import Axios from 'axios';



class Sell extends Component {
constructor(props) {
    super(props);
    this.state = {
        isHidden: true,
        images: null
    };

    this.inputFileChanged = this.inputFileChanged.bind(this);
    this.removeUpload = this.removeUpload.bind(this);

}


    inputFileChanged(e){
        if(window.FileReader){
            let file = e.target.files[0], reader = new FileReader(), self = this;
            reader.onload = function(r){
                self.setState({
                    images: r.target.result,
                    isHidden: false
                });
            }
            reader.readAsDataURL(file);

        }
        else {
            alert('Soryy, your browser does\'nt support for preview');
        }
    }

    removeUpload() {
        this.setState({
            images: null,
            isHidden: true
        });
}



    render() {
        return (
            <div>
                    <div className="containere">
                        <div className="sign-up-content">


                                <legend style={{textAlign: 'center'}}>Ne Satıyorsun?</legend>

                                <script className="jsbin"
                                        src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
                                <div className="file-upload col-md-12">
                                    {this.state.isHidden &&
                                        <div>
                                    <input type="file" ref="input_reader" multiple className="file-upload-btn" onChange={this.inputFileChanged} accept="image/jpeg, image/png"/>
                                    </div>}
                                    {!this.state.isHidden &&
                                        <div className="file-upload-content">
                                            <img className="file-upload-image" src={this.state.images} alt="your image"/>
                                            <div className="image-title-wrap">
                                                <button type="button" onClick={this.removeUpload}
                                                        className="remove-image">Sil Resim Yükle
                                                </button>
                                            </div>
                                        </div>
                                    }

                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" htmlFor="kategori_sec">Kategori
                                        Seç</label>
                                    <div className="col-md-12">
                                        <select id="kategori_sec" name="kategori_sec" className="form-control">
                                            <option value="1">Emlak</option>
                                            <option value="2">Vasıta</option>
                                            <option value="3">Elektronik</option>
                                            <option value="4">Giyim</option>
                                            <option value="5">Aksesuar</option>
                                            <option value="6">Diğer</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" htmlFor="urun_adı">Ürün Adı</label>
                                    <div className="col-md-12">
                                        <input id="urun_adı" name="urun_adı" type="text" placeholder="Pikap"
                                               className="form-control input-md"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" htmlFor="fiyat">Fiyat</label>
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <input id="fiyat" name="fiyat" className="form-control"
                                                   placeholder="Fiyat Giriniz" type="text"/>
                                                <span className="input-group-addon">TRY</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-12 control-label" htmlFor="urun_ozellik">Özellikler</label>
                                    <div className="col-md-12">
                                        <textarea className="form-control" id="urun_ozellik" name="urun_ozellik">Detay verin...</textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" htmlFor="button1id"></label>
                                    <div className="col-md-12">
                                        <button id="button1id" name="button1id" className="btn btn-success">Kaydet
                                        </button>
                                        <button id="button2id" name="button2id" className="btn btn-danger">İptal
                                        </button>

                                        <hr/>
                                    </div>
                                </div>


                        </div>
                    </div>
                </div>
        );
    }
}

export default Sell;