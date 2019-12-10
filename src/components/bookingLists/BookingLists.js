import React, { Component } from 'react';
import BookingItems from './../../components/bookingItems/BookingItems';
import callApi from './../../utils/apiCaller';

class BookingLists extends Component {

    onDelete = (id) =>{
        console.log(id);
        callApi(`bookings/${id}`, 'DELETE', null).then(res => {
            console.log(res);           
       });
        
    }

    render() {
        let { bookings } = this.props;      
        return (
            <div className="row mt-15">
                <div className="col-xs-20 col-sm-20 col-md-20 col-lg-20">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="warning">
                                <th className="text-center">STT</th>
                                <th className="text-center">Họ và tên</th>
                                <th className="text-center">Số điện thoại</th>
                                <th className="text-center">Ngày nhận xe</th>
                                <th className="text-center">Ngày trả xe</th>
                                <th className="text-center">Địa chỉ nhận xe</th>
                                <th className="text-center">Địa chỉ trả xe</th>
                                <th className="text-center">Ngày tạo</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings ? this.showbookings(bookings) : ''}
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
    showbookings(bookings) {      
        var result = null; 
        var listBooking = bookings.listBooking;            
        if (listBooking && listBooking.length > 0) {
            result = listBooking.map((booking, index) => {
                return (
                    <BookingItems
                        key={index}
                        booking={booking}
                        index={index}
                        onDelete = {this.onDelete} >                            
                    </BookingItems>
                );
            });
        }
        return result;
    };
}

export default BookingLists;