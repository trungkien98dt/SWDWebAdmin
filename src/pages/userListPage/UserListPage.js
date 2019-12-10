import React, { Component } from 'react';
import UserList from './../../components/userLists/UserLists';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';

class UserListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        callApi('users', 'GET', null).then(res => {
            this.setState({
                users: res.data
            });
        });
    }


    render() {
        var users = this.state.users;
        console.log(users);
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách người dùng</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {users ? <UserList users={users} /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(UserListPage);