import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';

class BranchActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtBranchName: '',
            txtBranchAddress: '',
            txtLatitude: '',
            txtLongtitude: '',
            txtDistrict: '',
            txtIsActive: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
            callApi(`branches/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data._id,
                    txtBranchName: data.branchName,
                    txtBranchAddress: data.address,
                    txtLatitude: data.latitude,
                    txtLongtitude: data.longtitude,
                    txtDistrict: data.district,
                    txtIsActive: data.isActive
                });
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let {
            id,
            txtBranchName,
            txtBranchAddress,
            txtLatitude,
            txtLongtitude,
            txtDistrict,
            txtIsActive
        } = this.state;
        var { history } = this.props;
        if (id) {
            callApi(`branches/${id}`, 'PATCH', {
                branchName: txtBranchName,
                address: txtBranchAddress,
                latitude: txtLatitude,
                longtitude: txtLongtitude,
                district: txtDistrict,
                isActive: txtIsActive
            }).then(res => {
                history.goBack();
            });
        } else {
            callApi('branches', 'POST', {
                branchName: txtBranchName,
                address: txtBranchAddress,
                latitude: txtLatitude,
                longtitude: txtLongtitude,
                district: txtDistrict,
                isActive: txtIsActive
            }).then(res => {
                history.goBack();
            });
        }
    }


    render() {
        var {
            txtBranchName,
            txtBranchAddress,
            txtLatitude,
            txtLongtitude,
            txtDistrict,
            txtIsActive
        } = this.state;
        return (

            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Thông tin cửa hàng</h3>
                </div>
                <div className="panel-body">

                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên Chi Nhánh</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtBranchName"
                                value={txtBranchName}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtBranchAddress"
                                value={txtBranchAddress}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Latitude</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtLatitude"
                                value={txtLatitude}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Longtitude</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtLongtitude"
                                value={txtLongtitude}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Quận</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtDistrict"
                                value={txtDistrict}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtIsActive"
                                value={txtIsActive}
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

export default BranchActionPage;