import React, { Component } from 'react';
import UserItems from './../../components/userItems/UserItems';

class UserLists extends Component {

    

    render() {
        let { users } = this.props;      
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="warning">
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên đăng nhập</th>
                                <th className="text-center">Họ và tên</th>
                                <th className="text-center">Ngày tạo</th>
                                <th className="text-center">Role</th>                              
                            </tr>
                        </thead>
                        <tbody>
                            {users ? this.showusers(users) : ''}
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
    showusers(users) {      
        var result = null; 
        var listUser = users.listUser;            
        if (listUser && listUser.length > 0) {
            result = listUser.map((user, index) => {
                return (
                    <UserItems
                        key={index}
                        user={user}
                        index={index}
                        onDelete = {this.onDelete} >                            
                    </UserItems>
                );
            });
        }
        return result;
    };
}

export default UserLists;