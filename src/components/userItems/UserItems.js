import React, { Component } from 'react';


class UserItems extends Component {



    render() {
        let { user, index } = this.props;
        console.log(user);
        let roleName = user.role ? 'User' : 'Admin';
        let roleClass = user.role ? "label label-success" : "label label-info";      
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.fullname}</td>
                <td>{user.createDate}</td>
                {/* <td>{user.role}</td> */}
                <td className="text-center">
                    <span className={roleClass}>
                        {roleName}
                    </span>
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

export default UserItems;