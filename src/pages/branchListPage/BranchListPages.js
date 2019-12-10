import React, { Component } from 'react';
import BranchList from './../../components/branchLists/BranchLists';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class BranchListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchs: []
        };
    }

    componentDidMount() {
        callApi('branches', 'GET', null).then(res => {
            this.setState({
                branchs: res.data
            });
        });
    }


    render() {
        var branchs = this.state.branchs;
        console.log(branchs);
        return (

            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách chi nhánh công ty</h3>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <div className="form-group">
                            <Link to="branch/add" className="btn btn-primary">
                                <span className="fa fa-plus mr-5"></span>Thêm Cửa Hàng
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {branchs ? <BranchList branchs={branchs} /> : ''}
                        </div>
                    </div>
                </div>
            </div>


        );
    }

}

const mapStateToProps = state => {
    return {
        branchs: state.branchs
    }
}

export default connect(mapStateToProps, null)(BranchListPage);