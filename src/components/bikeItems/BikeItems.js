import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BikeItems extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        let { bike, index } = this.props;
        console.log(bike);

        let statusName, statusClass;
        switch (bike.bikeStatus) {
            case 0:
                statusName = 'Khả dụng'
                statusClass = "label label-success"
                break;
            case 1:
                statusName = 'Bận'
                statusClass = "label label-warning"
                break;
            case 2:
                statusName = 'Không kinh doanh'
                statusClass = "label label-default"
                break;
            default:
                break;
        }

        // let statusName = bike.bikeStatus ? 'Không kinh doanh' : 'Sẵng sàng';
        // let statusClass = bike.bikeStatus ? "label label-default" : "label label-success";     
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{bike.bikeName}</td>
                <td>{bike.engineSize}</td>
                <td>{bike.moneyRent}</td>
                <td>{bike.moneyDeposit}</td>
                <td className="text-center">
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td className="text-center">
                    <Link
                        to={`/bike/${bike._id}/edit`}
                        className="btn btn-warning"
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </Link>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(bike._id)}>
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

export default BikeItems;