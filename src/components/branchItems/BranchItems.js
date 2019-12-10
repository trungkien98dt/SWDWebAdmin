import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BranchItems extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        let { branch, index } = this.props;
        console.log(branch);
        let statusName = branch.isActive ? 'Hoạt động' : 'Ngừng hoạt động';
        let statusClass = branch.isActive ? "label label-success" : "label label-default";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{branch.branchName}</td>
                <td>{branch.address}</td>
                <td className="text-center">
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td className="text-center">
                    <Link
                        to={`/branch/${branch._id}/edit`}
                        className="btn btn-warning"
                    >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </Link>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(branch._id)}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default BranchItems;