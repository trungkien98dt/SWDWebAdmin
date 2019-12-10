import React, { Component } from 'react';
import BookingList from './../../components/bookingLists/BookingLists';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';

class BookingListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        };
    }

    componentDidMount() {
        callApi('bookings', 'GET', null).then(res => {
            this.setState({
                bookings: res.data
            });
        });
    }


    render() {
        var bookings = this.state.bookings;
        console.log(bookings);
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách đặt xe</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15">
                            {bookings ? <BookingList bookings={bookings} /> : ''}
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

const mapStateToProps = state => {
    return {
        bookings: state.bookings
    }
}

export default connect(mapStateToProps, null)(BookingListPage);