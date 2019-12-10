import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BookingItems extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }


    render() {
        let { booking, index } = this.props;
        console.log(booking);
        let statusName, statusClass;
        switch (booking.bookingStatus) {
            case 0:
                statusName = 'Chờ'
                statusClass = "label label-warning"
                break;
            case 1:
                statusName = 'Chấp nhận'
                statusClass = "label label-info"
                break;
            case 2:
                statusName = 'Đang sử dụng'
                statusClass = "label label-primary"
                break;
            case 3:
                statusName = 'Đã thanh toán'
                statusClass = "label label-default"
                break;
            case 4:
                statusName = 'Hủy'
                statusClass = "label label-danger"
                break;
            default:
                break;
        }
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{booking.fullname}</td>
                <td>{booking.phone}</td>
                <td>{booking.pickUpDate}</td>
                <td>{booking.returnDate}</td>
                <td>{booking.receiveAddress}</td>
                <td>{booking.returnAddress}</td>
                <td>{booking.bookingDate}</td>                
                <td className="text-center">
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td className="text-center">
                    <div className="form-group">
                    <Link
                        to={`/booking/${booking._id}/edit`}
                        className="btn btn-warning"
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </Link>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(booking._id)}>
                            <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>





                {/* <td>1</td>
                <td>1</td>
                <td>Test</td>
                <td>200</td>
                <td className="text-center">
                    <span className="label label-primary">
                        Sửa
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td> */}
            </tr>
        );
    }
}

export default BookingItems;