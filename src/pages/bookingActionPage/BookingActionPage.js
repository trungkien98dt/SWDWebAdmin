import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';

class BookingActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            bike: '',
            user: '',
            bookingDate: '',
            receiveAddress: '',
            receiveLongtitude: '',
            receiveLatitude: '',
            pickUpDate: '',
            returnDate: '',
            returnAddress: '',
            returnLongtitude: '',
            returnLatitude: '',
            txtBookingStatus: '',
            phone: '',
            fullname: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
            callApi(`bookings/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data._id,
                    bike: data.bike,
                    user: data.user,
                    bookingDate: data.bookingDate,
                    receiveAddress: data.receiveAddress,
                    receiveLongtitude: data.receiveLongtitude,
                    receiveLatitude: data.receiveLatitude,
                    pickUpDate: data.pickUpDate,
                    returnDate: data.returnDate,
                    returnAddress: data.returnAddress,
                    returnLongtitude: data.returnLongtitude,
                    returnLatitude: data.returnLatitude,
                    txtBookingStatus: data.bookingStatus,
                    phone: data.phone,
                    fullname: data.fullname
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
            bike,
            user,
            bookingDate,
            receiveAddress,
            receiveLongtitude,
            receiveLatitude,
            pickUpDate,
            returnDate,
            returnAddress,
            returnLongtitude,
            returnLatitude,
            txtBookingStatus,
            phone,
            fullname
        } = this.state;

        var { history } = this.props;
        callApi(`bookings/${id}`, 'PATCH', {
            bike: bike,
            user: user,
            bookingDate: bookingDate,
            receiveAddress: receiveAddress,
            receiveLongtitude: receiveLongtitude,
            receiveLatitude: receiveLatitude,
            pickUpDate: pickUpDate,
            returnDate: returnDate,
            returnAddress: returnAddress,
            returnLongtitude: returnLongtitude,
            returnLatitude: returnLatitude,
            bookingStatus: txtBookingStatus,
            phone: phone,
            fullname: fullname
        }).then(res => {
            history.goBack();
        });
    }


    render() {
        var {
            txtBookingStatus
        } = this.state;
        return (

            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Thông tin đặt xe</h3>
                </div>
                <div className="panel-body">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form onSubmit={this.onSave}>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="txtBookingStatus"
                                        value={txtBookingStatus}
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

export default BookingActionPage;