import React, {Component} from 'react';
import '../css/sell.css';
import DropToUpload from 'react-drop-to-upload';



class Sell extends Component {
constructor(props) {
    super(props);
}

    handleDrop(files) {
        console.log("resim droplandı")
        var data = new FormData();

        files.forEach((file, index) => {
            data.append('file' + index, file);
        });

    }


    render() {
        return (
            <div>
                    <div className="container">
                        <div className="sign-up-content">


                                <legend style={{textAlign: 'center'}}>Ne Satıyorsun?</legend>

                                <script className="jsbin"
                                        src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
                                <div className="file-upload col-md-12">
                                    <div className="image-upload-wrap">
                                        <DropToUpload className="file-upload-input" type='file' onDrop={ this.handleDrop } accept="image/*"/>
                                        <div className="drag-text">
                                            <h3>Yüklemek İstediğiniz Resmi Sürekleyip Bırakın</h3>
                                        </div>
                                    </div>
                                    <div className="file-upload-content">
                                        <img className="file-upload-image" src="#" alt="your image"/>
                                        <div className="image-title-wrap">
                                            <button type="button" onClick="removeUpload()"
                                                    className="remove-image">Sil <span className="image-title">Resim Yükle</span>
                                            </button>
                                        </div>
                                    </div>
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