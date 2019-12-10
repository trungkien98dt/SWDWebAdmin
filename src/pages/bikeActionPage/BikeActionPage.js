import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';

class BikeActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtBikeName: '',
            txtBranch: '',
            txtStatus: '',
            txtEngine: '',
            txtTranmission: '',
            txtMoneyRent: '',
            txtMoneyDeposit: '',
            txtImage1: '',
            txtImage2: '',
            txtCollateral1: '',
            txtCollateral2: '',
            txtCollateral3: '',
            txtCollateral4: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
            callApi(`bikes/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data._id,
                    txtBikeName: data.bikeName,
                    txtBranch: data.branch,
                    txtStatus: data.bikeStatus,
                    txtEngine: data.engineSize,
                    txtTranmission: data.transmissionType,
                    txtMoneyRent: data.moneyRent,
                    txtMoneyDeposit: data.moneyDeposit,
                    txtImage1: data.images[0],
                    txtImage2: data.images[1],
                    txtCollateral1: data.collaterals[0],
                    txtCollateral2: data.collaterals[1],
                    txtCollateral3: data.collaterals[2],
                    txtCollateral4: data.collaterals[3]
                });
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let {
            id,
            txtBikeName,
            txtBranch,
            txtStatus,
            txtEngine,
            txtTranmission,
            txtMoneyRent,
            txtMoneyDeposit,
            txtImage1,
            txtImage2,
            txtCollateral1,
            txtCollateral2,
            txtCollateral3,
            txtCollateral4
        } = this.state;

        let imageArr = [];
        let collateralsArr = [];
        imageArr.push(txtImage1);
        imageArr.push(txtImage2);
        collateralsArr.push(parseInt(txtCollateral1));
        collateralsArr.push(parseInt(txtCollateral2));
        collateralsArr.push(parseInt(txtCollateral3));
        collateralsArr.push(parseInt(txtCollateral4));

        var { history } = this.props;
        if (id) {
            callApi(`bikes/${id}`, 'PATCH', {
                bikeName: txtBikeName,
                branch: txtBranch,
                bikeStatus: txtStatus,
                engineSize: txtEngine,
                transmissionType: txtTranmission,
                moneyRent: txtMoneyRent,
                moneyDeposit: txtMoneyDeposit,
                images: imageArr,
                collaterals: collateralsArr
            }).then(res => {
                history.goBack();
            });
        } else {
            callApi('bikes', 'POST', {
                bikeName: txtBikeName,
                branch: txtBranch,
                bikeStatus: txtStatus,
                engineSize: txtEngine,
                transmissionType: txtTranmission,
                moneyRent: txtMoneyRent,
                moneyDeposit: txtMoneyDeposit,
                images: imageArr,
                collaterals: collateralsArr
            }).then(res => {
                history.goBack();
            });
        }
    }


    render() {
        var {
            txtBikeName,
            txtBranch,
            txtStatus,
            txtEngine,
            txtTranmission,
            txtMoneyRent,
            txtMoneyDeposit,
            txtImage1,
            txtImage2,
            txtCollateral1,
            txtCollateral2,
            txtCollateral3,
            txtCollateral4
        } = this.state;
        return (


            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Thông tin xe</h3>
                </div>
                <div className="panel-body">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <label>Tên Xe</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtBikeName"
                                        value={txtBikeName}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Mã cửa hàng</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtBranch"
                                        value={txtBranch}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái Xe</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtStatus"
                                        value={txtStatus}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Engine Size</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtEngine"
                                        value={txtEngine}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tranmission Type</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtTranmission"
                                        value={txtTranmission}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tiền thuê</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtMoneyRent"
                                        value={txtMoneyRent}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tiền cọc</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtMoneyDeposit"
                                        value={txtMoneyDeposit}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Hình</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtImage1"
                                        value={txtImage1}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Hình</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtImage2"
                                        value={txtImage2}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Cọc</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtCollateral1"
                                        value={txtCollateral1}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Cọc</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtCollateral2"
                                        value={txtCollateral2}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Cọc</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtCollateral3"
                                        value={txtCollateral3}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Cọc</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtCollateral4"
                                        value={txtCollateral4}
                                        onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Lưu</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>






        );
    }
}

export default BikeActionPage;